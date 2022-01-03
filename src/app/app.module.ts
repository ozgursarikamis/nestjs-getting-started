import { Module } from '@nestjs/common';
import { StudentsController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentService],
})
export class AppModule {}
