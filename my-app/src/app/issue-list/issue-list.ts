import { Component, computed, inject } from '@angular/core';
import { Issues } from '../issues';
import { ClrDatagridModule } from '@clr/angular';

@Component({
  selector: 'app-issue-list',
  imports: [ClrDatagridModule],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.scss',
})
export class IssueList {
  private issueService = inject(Issues);

  protected readonly issues = computed(() => {
    const data = this.issueService.issues();
    return data.filter(i => !i.completed);
  })
}
