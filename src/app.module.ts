import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PhotoModule} from './photo/photo.module'
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [
    PhotoModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
