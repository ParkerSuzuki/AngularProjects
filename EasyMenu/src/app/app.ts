import { Component, inject, signal } from '@angular/core';
import { ChapterService } from './chapter';
import { ChapterTitle } from "./chapter-title/chapter-title.componenet";
import { TableList } from "./table-list/table-list";

@Component({
  selector: 'app-root',
  imports: [ChapterTitle, TableList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly chapterService = inject(ChapterService);
}
