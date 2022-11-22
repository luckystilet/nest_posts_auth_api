import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
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
      return true
    } catch (error) {
      throwUnAuthorized()
    }
  }
}
