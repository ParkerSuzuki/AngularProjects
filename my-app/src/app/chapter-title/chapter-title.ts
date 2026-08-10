import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chapter-title',
  imports: [],
  template: `<h1>{{ title() }}</h1>`,
  styles: ``,
})
export class ChapterTitle {
  title = input.required<string>();
}
