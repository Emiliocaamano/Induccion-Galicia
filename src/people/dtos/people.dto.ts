import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsDate, IsEmail, IsNumber, Length } from "class-validator";

export class CreatePersonaDto{
  @ApiProperty({
    example: "Emilio",
    description: "Nombre de la persona"
  })
  @IsString()
  @Length(2,50)
  firstName: string;
  @ApiProperty({
    required: true,
    example: "Caaamaño",
    description: "Apellido paterno de la persona"
  })
  @IsString()
  @Length(2,50)
  fatherLastName: string;
  @ApiProperty({
    required: true,
    example: "Ravetti",
    description: "Apellido materno de la persona"
  })
  @IsString()
  @Length(2,50)
  motherLastName: string;
  @ApiProperty({
    required: true,
    example: "e.caamano@accenture",
    description: "Email de la persona"
  })
  @IsEmail()
  @Length(2,150)
  email: string;
  @ApiProperty({
    required: true,
    example: new Date(1996,5,16),
    description: "Fecha de nacimiento"
  })
  @IsDate()
  birthday: Date;
  @ApiProperty({
    required: true,
    example: 26,
    description: "Edad de la persona"
  })
  @IsNumber()
  age: number;
}

export class UpdatePersonaDto{
  @ApiProperty({
    example: "Emilio",
    description: "Nombre de la persona"
  })
  @IsString()
  @Length(2,50)
  firstName: string;
  @ApiProperty({
    required: true,
    example: "Caaamaño",
    description: "Apellido paterno de la persona"
  })
  @IsString()
  @Length(2,50)
  fatherLastName: string;
  @ApiProperty({
    required: true,
    example: "Ravetti",
    description: "Apellido materno de la persona"
  })
  @IsString()
  @Length(2,50)
  motherLastName: string;
  @ApiProperty({
    required: true,
    example: "e.caamano@accenture",
    description: "Email de la persona"
  })
  @IsEmail()
  @Length(2,150)
  email: string;
  @ApiProperty({
    required: true,
    example: new Date(1996,5,16),
    description: "Fecha de nacimiento"
  })
  @IsDate()
  birthday: Date;
  @ApiProperty({
    required: true,
    example: 26,
    description: "Edad de la persona"
  })
  @IsNumber()
  age: number;
}