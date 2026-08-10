import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChapterService {
  readonly chapterTitle = signal('Chapter 1: Angular AI Kick-Starter');
}
