import { Injectable } from '@nestjs/common';
import { User } from '../enitities/user.entity';

@Injectable()
export class UsersService {

  private counteId:number = 1;
  private users: User[] = [
    {
      id: 1,
      firstName: 'Emilio',
      lastName : 'Caamaño',
      email: 'emilio.caamano@accenture.com'
    }
  ];

  async findAll(){
    return this.users;
  };
  async findOne(){

  };
  async update(){

  };
  async create(){

  };
}
