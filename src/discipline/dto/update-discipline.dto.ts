import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateDisciplineDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  teacher: string

  @IsOptional()
  @IsNumber()
  room: number

}
