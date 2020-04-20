import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TheatricalPlayModule from "./theatrical-play/theatrical-play.module";

@Module({
  imports: [
      TheatricalPlayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
