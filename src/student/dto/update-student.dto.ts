import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
    @IsOptional()
    @IsNumber()
    enrollment: number

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    phone: string

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsString()
    disciplineIDs?: string[]
}
