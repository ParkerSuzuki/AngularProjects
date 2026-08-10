import { Component, input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-chapter-title',
  imports: [MatToolbar],
  template: `
    <mat-toolbar>
      <span class="title">{{title()}}</span>
    </mat-toolbar>
  `,
  styles: ``,
})
export class ChapterTitle {
  title = input.required<string>();
}
