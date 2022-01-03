import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';

@Controller('students')
export class StudentsController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId/:teacherId')
  getStudentById(
    @Param('studentId') studentId: string,
    @Param('teacherId') teacherId: number,
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
  updateStudent(@Param('studentId') studentId: string, @Body() body: string) {
    console.log('body :>> ', body);
    console.log('studentId :>> ', studentId);
    return '';
  }
}
