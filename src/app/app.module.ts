import { Module } from '@nestjs/common';
import { StudentsController } from 'src/student/student.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
