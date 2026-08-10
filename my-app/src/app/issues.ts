import { Service, signal } from '@angular/core';
import { Issue } from './issue';
import { issueData } from '../../public/mock-issues';

@Service()
export class Issues {
  readonly issues = signal<Issue[]>(issueData);

  create(issue: Issue) {
    this.issues.update(issues => {
      issue.issueNo = this.issues().length + 1;
      return [...issues, issue];
    })
  }
}
