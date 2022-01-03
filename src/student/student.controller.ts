import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  createStudent(@Body() body) {
    console.log('body :>> ', body);
    return 'Create Student';
  }
}
