import { Controller, Get, Param } from '@nestjs/common';

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
}
