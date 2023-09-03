import { Discipline } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";





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
    disciplineIDs?: string[]

}
