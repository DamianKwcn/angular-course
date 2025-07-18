import { Component, Input} from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask() {
    return this.tasksService.removeTask(this.userId)
  }

  onStartAddTask() {
    return this.isAddingTask = true;
  }

  onCloseAddTask() {
    return this.isAddingTask = false;
  }

}
