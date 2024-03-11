import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortenerService } from './url-shortener/url-shortener.service';
import { UrlShortenerController } from './url-shortener/url-shortener.controller';

@Module({
  imports: [],
  controllers: [AppController, UrlShortenerController],
  providers: [AppService, UrlShortenerService],
})
export class AppModule {}
