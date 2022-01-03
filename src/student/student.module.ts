import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StudentsController } from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from './valid-student.middleware';
import { ValidationPipe } from './validation.pipe';

@Module({
  exports: [StudentService],
  controllers: [StudentsController],
  providers: [StudentService, ValidationPipe],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
  }
}
