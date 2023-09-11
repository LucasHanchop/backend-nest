import { Injectable } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Student } from '@prisma/client'

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const student: CreateStudentDto = createStudentDto
    return await this.prisma.student.create({
      data: {
        ...student,
      },
    })
  }

  async findAll(): Promise<Student[]> {
    return await this.prisma.student.findMany()
  }

  async findOne(id: string): Promise<Student | null> {
    return await this.prisma.student.findFirst({
      where: { id: id },
    })
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student: UpdateStudentDto = updateStudentDto

    return await this.prisma.student.update({
      where: { id: id },
      data: {
        ...student,
      },
    })
  }

  async remove(id: string): Promise<Student> {
    return await this.prisma.student.delete({
      where: { id: id },
    })
  }
}
