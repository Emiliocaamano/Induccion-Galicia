import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [UsersModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
