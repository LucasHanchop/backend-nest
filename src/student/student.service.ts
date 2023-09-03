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
        disciplineIDs: [],
      }
    })
  }

  async findAll(): Promise<Student[]> {
    return await this.prisma.student.findMany()
  }

  async findOne(id: string) {
    return `This action returns a #${id} student`;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
