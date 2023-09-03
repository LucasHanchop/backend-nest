import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { StudentModule } from './student/student.module'
import { DisciplineModule } from './discipline/discipline.module'

@Module({
  imports: [PrismaModule, StudentModule, DisciplineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
