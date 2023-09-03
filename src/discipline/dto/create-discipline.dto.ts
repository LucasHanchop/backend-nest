import { IsAlpha, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateDisciplineDto {
  @IsString()
  name: string

  @IsString()
  teacher: string

  @IsNumber()
  room: number

  @IsOptional()
  enrollmentId: string | null
}
