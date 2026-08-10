import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClrFormsModule } from '@clr/angular';
import { Issues } from '../issues';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-reporter',
  imports: [ReactiveFormsModule, ClrFormsModule],
  templateUrl: './issue-reporter.html',
  styleUrl: './issue-reporter.scss',
})
export class IssueReporter {
  private issueService = inject(Issues);

  form!: FormGroup;
  private buildForm() {
    this.form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    priority: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  }

  constructor() {
    this.buildForm();
  }

  create() {
    if (!this.form.valid) {
      return;
    }
    this.issueService.create(this.form.value as Issue);
    this.form.reset();
    this.buildForm();
  }
}
