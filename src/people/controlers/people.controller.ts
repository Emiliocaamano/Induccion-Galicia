import { Body, Controller, Delete, Param, Put } from '@nestjs/common';
import { Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePersonaDto, UpdatePersonaDto } from '../dtos/people.dto';
import { People } from '../entities/persona.entity';
import { PeopleService } from '../services/people.service';

@ApiTags('people')
@Controller('people')
export class PeopleController {
  
  constructor(private readonly peopleService : PeopleService){
  }

  @Get('get-all')
  @ApiOperation({
    summary: 'Obtiene Todos los usuarios registrados'
  })
  @ApiResponse({
    status: 200,
    description: "Retorna listado de usuarios registrados",
    type: People, 
    isArray: true
  })
  async findAll(): Promise<People[]>{
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtiene uno de los usuarios registrados'
  })
  @ApiResponse({
    status: 200,
    description: "Retorna un de usuarios registrados bajo ID",
    type: People, 
  })
  async findOne(@Param('id') id:number ){
    return this.peopleService.findOne(+id);
  }

  @Post()
  @ApiOperation({
    summary: 'Crea un usuario'
  })
  @ApiResponse({
    status: 200,
    description: "Crea un usuario con los datos ingresados",
    type: People, 
  })
  async create(@Body() payload:CreatePersonaDto){
    return this.peopleService.create(payload)
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Modifica un usuario'
  })
  @ApiResponse({
    status: 200,
    description: "Modifica un usuario con los datos a modificar",
    type: People, 
  })
  async update(@Param('id') id:number, @Body() payload:UpdatePersonaDto){
    return this.peopleService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Elimina un usuario'
  })
  @ApiResponse({
    status: 200,
    description: "elimina un usuario ",
    type: People, 
  })
  async remove(@Param('id') id:number){
    return this.peopleService.remove(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Activa/desactiva rol ADMIN'
  })
  @ApiResponse({
    status: 200,
    description: "Modifica el valor de la propiedad de ADMIN del usuario",
    type: People, 
  })
  async logicRemove(@Param('id') id:number){
    return this.peopleService.logicRemove(id);
  }
}
