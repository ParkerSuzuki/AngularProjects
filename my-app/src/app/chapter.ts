import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChapterService {
  readonly chapterTitle = signal('Chapter 2: IssueTracker');
}
