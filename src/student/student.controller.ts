import { Controller, Get, Param } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param() parameters) {
    console.log('studentId :>> ', parameters.studentId);
    return `Get Student: ${parameters.studentId}`;
  }
}
