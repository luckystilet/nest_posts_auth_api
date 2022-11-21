import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { Role } from './roles.model'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { UserRoles } from './user-roles.model'

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
