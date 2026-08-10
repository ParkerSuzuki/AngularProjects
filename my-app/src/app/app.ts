import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChapterTitle } from './chapter-title/chapter-title.componenet';
import { ChapterService } from './chapter';
import { ClrLayoutModule } from '@clr/angular';
import { IssueList } from './issue-list/issue-list';
import { IssueReporter } from "./issue-reporter/issue-reporter";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChapterTitle,
    ClrLayoutModule,
    IssueList,
    IssueReporter
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  protected readonly chapterService = inject(ChapterService);
}
