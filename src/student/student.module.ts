import { Module } from '@nestjs/common';
import { StudentsController } from './student.controller';
import { StudentService } from './student.service';
import { ValidationPipe } from './validation.pipe';

@Module({
  exports: [StudentService],
  controllers: [StudentsController],
  providers: [StudentService, ValidationPipe],
})
export class StudentsModule {}
