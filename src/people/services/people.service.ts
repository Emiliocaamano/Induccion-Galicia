import { Injectable } from '@nestjs/common';
import { UpdatePersonaDto } from '../dtos/people.dto';
import { People } from '../entities/persona.entity'

@Injectable()
export class PeopleService {
  private counteId:number = 1;
  private peoples: People[] = [
    { 
      id: 1,
      firstName: 'Emilio',
      fatherLastName : 'Caamaño',
      motherLastName: 'Ravetti',
      email: 'emilio.caamano@accenture.com',
      birthday: new Date("December 17, 1995"),
      age: 26,
      admin: true
    }
  ];

  async findAll(): Promise<People[]>{
    return await this.peoples;
  };
  async findOne(id: number){
    const people = this.peoples.find((item)=> item.id === id);
    if (!people){
      return
    };
    return people;
  };
  async create(data: any){
    this.counteId++;
    const newPeople: People =  {
      id: this.counteId,
      ...data
    }
    this.peoples.push(newPeople);
    return newPeople;
  };
  async update(id:number, changes:UpdatePersonaDto){
    const people = this.peoples.find((item)=> item.id === id);
    if (!people){
      return
    };
    const index = this.peoples.findIndex((item) => item.id === id);
    this.peoples[index]= {
      ...people,
      ...changes
    };
    return this.peoples[index];
  };
  async remove(id:number){
    const index = this.peoples.findIndex((item)=> item.id === id);
    if (index === -1){
      return false
    };
    this.peoples.slice(index,1)
    return true
  };
  async logicRemove(id:number){
    const people = this.peoples.find((item)=> item.id === id);
    if(people.admin === true){
      people.admin = false;
    }else{
      people.admin = true;
    }
    return people;
  };
}
