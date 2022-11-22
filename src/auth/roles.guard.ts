import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'
import { ROLES_KEY } from './roles-auth.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) return true

    const throwUnAuthorized = () => {
      throw new UnauthorizedException({ message: 'User is unauthorized' })
    }

    const req = context.switchToHttp().getRequest()
    try {
      const authHeader = req.headers.authorization
      const [bearer, token] = authHeader.split(' ')
      if (bearer !== 'Bearer' || !token) throwUnAuthorized()
      const user = this.jwtService.verify(token)
      req.user = user
      return user.roles.some(role => requiredRoles.includes(role.value))
    } catch (error) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN)
    }
  }
}
