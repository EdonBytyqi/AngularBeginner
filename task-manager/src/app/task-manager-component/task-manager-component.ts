import { Component, inject, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task-manager-component',
  imports: [ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './task-manager-component.html',
  styleUrl: './task-manager-component.css',
})
export class TaskManagerComponent {
  taskService = inject(TaskService);

  taskInput = new FormControl('', { nonNullable: true, validators: [Validators.required] });

  tasks = this.taskService.tasks;
  // 3. Computed Stats
  // Logic: Get list -> count completed -> return string
  stats = computed(() => {
    // Your code here
    const tasks = this.tasks();
    const completed = tasks.filter((t) => t.completed).length;
    return `${completed} / ${tasks.length} completed`;
  });

  // 4. Methods
  add() {
    if (this.taskInput.invalid) return;
    this.taskService.addTask(this.taskInput.value);
    this.taskInput.reset('');
  }

  delete(id: number) {
    this.taskService.removeTask(id);
  }

  toggle(id: number) {
    this.taskService.toggleTask(id);
  }
}
