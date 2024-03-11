// src/url-shortener/url-shortener.controller.ts

import { Body, Controller, Post, Redirect, Param, NotFoundException, Get } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';

@Controller('shorten')
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post()
  shorten(@Body('url') url: string): { shortUrl: string } {
    const shortCode = this.urlShortenerService.shortenUrl(url);
    const shortUrl = `http://localhost:3000/${shortCode}`;
    return { shortUrl };
  }

  @Get(':shortCode')
  // @Redirect('', 301)
  redirectToOriginalUrl(@Param('shortCode') shortCode: string) {
    const originalUrl = this.urlShortenerService.getOriginalUrl(shortCode);
    
    if (!originalUrl) {
      throw new NotFoundException('URL not found');
    }

    return { url: originalUrl };
  }
}
