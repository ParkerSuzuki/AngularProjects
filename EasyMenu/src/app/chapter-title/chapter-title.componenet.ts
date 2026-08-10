import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chapter-title',
  imports: [],
  template: `
    <span class="title">{{title()}}</span>
  `,
  styles: ``,
})
export class ChapterTitle {
  title = input.required<string>();
}
