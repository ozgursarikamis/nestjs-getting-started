import { Controller, Get, Param } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param() parameters: { studentId: string }) {
    console.log('studentId :>> ', parameters);
    return parameters;
  }
}
