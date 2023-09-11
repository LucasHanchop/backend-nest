import { Module } from '@nestjs/common'
import { DisciplineService } from './discipline.service'
import { DisciplineController } from './discipline.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [DisciplineController],
  providers: [DisciplineService],
  exports: [DisciplineService],
})
export class DisciplineModule {}
