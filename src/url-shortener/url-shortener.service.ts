// src/url-shortener/url-shortener.service.ts

import { Injectable } from '@nestjs/common';
import * as shortid from 'shortid';

@Injectable()
export class UrlShortenerService {
  private urlDatabase: Record<string, string> = {};

  shortenUrl(originalUrl: string): string {
    const shortCode = shortid.generate();
    this.urlDatabase[shortCode] = originalUrl;
    return shortCode;
  }

  getOriginalUrl(shortCode: string): string | null {
    return this.urlDatabase[shortCode] || null;
  }
}
