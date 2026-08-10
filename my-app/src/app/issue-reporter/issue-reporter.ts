import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-issue-reporter',
  imports: [ReactiveFormsModule, ClrFormsModule],
  templateUrl: './issue-reporter.html',
  styleUrl: './issue-reporter.scss',
})
export class IssueReporter {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    priority: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  })
}
