import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string;

}
