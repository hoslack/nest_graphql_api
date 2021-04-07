import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
  CreateUserInput,
  DeleteUserInput,
  GetUserArgs,
  GetUsersArgs,
  UpdateUserInput
} from './dto'
import { User } from './models/user'
import { UsersService } from './users.services'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser(getUserArgs)
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers(getUsersArgs)
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.userService.createUser(createUserData)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData)
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.userService.deleteUser(deleteUserData)
  }
}
