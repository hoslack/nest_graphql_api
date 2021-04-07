import { Injectable } from '@nestjs/common'
import { User } from './models/user'

@Injectable()
export class UsersService {
  private users: User[] = []
  private user: User

  public createUser(): User {
    return this.user
  }

  public updateUser(): User {
    return this.user
  }

  public getUser(): User {
    return this.user
  }

  public getUsers(): User[] {
    return this.users
  }

  public deleteUser(): User {
    return this.user
  }
}
