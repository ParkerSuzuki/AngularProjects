import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChapterTitle } from './chapter-title/chapter-title';
import { ChapterService } from './chapter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChapterTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  protected readonly chapterService = inject(ChapterService);
}
