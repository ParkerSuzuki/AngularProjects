import { Component, input } from '@angular/core';
import { ClrNavigationModule } from '@clr/angular';

@Component({
  selector: 'app-chapter-title',
  imports: [ClrNavigationModule],
  template: `
    <clr-header>
      <div class="branding">
        <a href="javascript://" class="nav-link">
          <span class="title">{{title()}}</span>
        </a>
      </div>
    </clr-header>
  `,
  styles: ``,
})
export class ChapterTitle {
  title = input.required<string>();
}
