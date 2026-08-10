import { Component, computed, inject, signal } from '@angular/core';
import { Issues } from '../issues';
import { ClrDatagridModule } from '@clr/angular';
import { Confirm } from '../confirm/confirm';

@Component({
  selector: 'app-issue-list',
  imports: [ClrDatagridModule, Confirm],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.scss',
})
export class IssueList {
  private issueService = inject(Issues);
  readonly selected = signal<number | undefined>(undefined);

  protected readonly issues = computed(() => {
    const data = this.issueService.issues();
    return data.filter(i => !i.completed);
  })

  complete(confirmed: boolean) {
    if(confirmed) {
      this.issueService.resolve(this.selected()!);
    }
    this.selected.set(undefined);
  }
}
