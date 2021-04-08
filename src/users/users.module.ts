import { Module } from '@nestjs/common'
import { UserResolver } from './users.resolver'
import { UsersService } from './users.services'

@Module({
  providers: [UserResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
