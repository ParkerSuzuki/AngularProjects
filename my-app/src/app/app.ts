import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChapterTitle } from './chapter-title/chapter-title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChapterTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  protected readonly chapterTitle = signal('Chapter 1: Angular AI Kick-Starter');
}
