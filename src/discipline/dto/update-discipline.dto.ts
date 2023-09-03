import { Student } from '@prisma/client'
import {
  IsAlpha,
  IsOptional,
  IsString,
} from 'class-validator'

export class UpdateDisciplineDto {
  @IsOptional()
  name: string

  @IsOptional()
  teacher: string

  @IsOptional()
  room: number

  @IsOptional()
  enrollmentId: string | null
}
