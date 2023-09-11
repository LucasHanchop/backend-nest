import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateStudentDto {
  @IsNumber()
  enrollment: number

  @IsString()
  name: string

  @IsString()
  phone: string

  @IsString()
  address: string

  @IsOptional()
  @IsString()
  avatarUrl: string
}
