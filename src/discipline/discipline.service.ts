import { PrismaService } from 'src/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateDisciplineDto } from './dto/create-discipline.dto'
import { UpdateDisciplineDto } from './dto/update-discipline.dto'
import { Discipline } from '@prisma/client'

@Injectable()
export class DisciplineService {

  constructor(private prisma: PrismaService) {}


  async create(createDisciplineDto: CreateDisciplineDto): Promise<Discipline> {
    const discipline: CreateDisciplineDto  = createDisciplineDto
    
    return await this.prisma.discipline.create({
      data: {
        ...discipline
        // name: discipline.name,
        // room: discipline.room,    
        // teacher: discipline.teacher,
        // enrollmentId: discipline?.enrollmentId
      }
    })
  }

  async findAll(): Promise<Discipline[]> {
    return await this.prisma.discipline.findMany()
  }

  async findOne(id: string): Promise<Discipline | null> {
    return await this.prisma.discipline.findFirst({
      where: { id: id }
    })
  }

  async update(id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Discipline> {
    const discipline: UpdateDisciplineDto = updateDisciplineDto
    
    return await this.prisma.discipline.update({
      where: { id: id },
      data: {
        ...discipline
      }
    })
  }

  async remove(id: string): Promise<Discipline> {
    return await this.prisma.discipline.delete({
      where: { id: id },
    })
  }
}
