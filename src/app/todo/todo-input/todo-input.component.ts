import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent{
  tasks = ['Study', 'Web Development', 'Water the plants', 'Meditation'];
  addTask(newTask: string) {
    if (newTask) {
      this.tasks.push(newTask);
    }
  }
}