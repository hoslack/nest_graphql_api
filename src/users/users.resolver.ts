import { Args, Query, Resolver } from '@nestjs/graphql'
import { GetUserArgs } from './dto/args/get-user.args'
import { User } from './models/user'
import { UsersService } from './users.services'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser()
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(): User[] {
    return this.userService.getUsers()
  }
}
