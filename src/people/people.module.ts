import { Global, Module } from '@nestjs/common';
import { PeopleController } from './controlers/people.controller';
import { PeopleService } from './services/people.service';
@Global()
@Module({
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {}
