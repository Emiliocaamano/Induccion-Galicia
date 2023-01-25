import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator'
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService){

  }
  @Get()
  findAll(){
    return this.userService.findAll;
  } 

}
