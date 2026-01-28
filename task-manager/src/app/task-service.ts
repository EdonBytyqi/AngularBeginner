import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<Task[]>([]);
  readonly tasks = this._tasks.asReadonly();

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this._tasks.update((tasks) => [...tasks, newTask]);
  }

  removeTask(id: number) {
    this._tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  toggleTask(id: number) {
    this._tasks.update((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }
}
