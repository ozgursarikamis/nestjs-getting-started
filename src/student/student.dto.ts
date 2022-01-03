export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto extends CreateStudentDto {
  id: number;
}

export class ResultDto {
  message: string;
  statusCode: number;
}
