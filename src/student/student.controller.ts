import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDto, ResultDto, UpdateStudentDto } from './student.dto';
import { StudentService } from './student.service';
import { ValidationPipe } from './validation.pipe';

@Controller('students')
export class StudentsController {
  constructor(private readonly service: StudentService) {}

  @Get()
  getStudents() {
    return this.service.getStudents();
  }

  @Get('/:studentId/:teacherId')
  getStudentById(
    @Param('studentId', new ValidationPipe()) studentId: string,
    @Param('teacherId', new ParseUUIDPipe()) teacherId: number,
  ) {
    console.log('studentId :>> ', studentId, teacherId);
    return { studentId, teacherId };
  }

  @Post()
  createStudent(@Body() student: CreateStudentDto) {
    console.log('CreateStudentDto :>> ', student);
    return 'Create Student';
  }

  @Put('/:studentId')
  updateStudent(@Param() student: UpdateStudentDto): ResultDto {
    console.log('Update Student:>> ', student);
    return { message: 'Successful', statusCode: 204 };
  }
}
