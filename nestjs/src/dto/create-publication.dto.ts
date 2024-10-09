import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePublicationDto {
  @ApiProperty({ example: 'Animal perdido na rua XYZ.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'perdido' })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 'Marília' })
  @IsNotEmpty()
  @IsString()
  location: string;
}
