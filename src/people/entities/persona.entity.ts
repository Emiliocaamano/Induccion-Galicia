import { ApiProperty } from "@nestjs/swagger";

export class People {
  @ApiProperty({
    required: false,
    example: 1,
    description: "Identificador unico"
  })
  id?: number;
  @ApiProperty({
    required: true,
    example: "Emilio",
    description: "Nombre de la persona"
  })
  firstName: string;
  @ApiProperty({
    required: true,
    example: "Caaamaño",
    description: "Apellido paterno de la persona"
  })
  fatherLastName: string;
  @ApiProperty({
    required: true,
    example: "Ravetti",
    description: "Apellido materno de la persona"
  })
  motherLastName: string;
  @ApiProperty({
    required: true,
    example: "e.caamano@accenture",
    description: "Email de la persona"
  })
  email: string;
  @ApiProperty({
    required: true,
    example: new Date(1996,5,16),
    description: "Fecha de nacimiento"
  })
  birthday: Date;
  @ApiProperty({
    required: true,
    example: 26,
    description: "Edad de la persona"
  })
  age: number;
  @ApiProperty({
    required: true,
    example: true,
    description: "Rol de la persona"
  })
  admin: boolean;
}