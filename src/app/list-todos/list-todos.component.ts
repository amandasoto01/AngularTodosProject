import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number, 
    public description: string, 
    public done: boolean,
    public targetDate: Date){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos  = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(1, 'Become an Expert at Angular', false, new Date()),
    new Todo(1, 'Visit Australia', false, new Date())

    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become an Expert at Angular'},
    // {id: 3, description: 'visit Australia'},
  ]
  todo = {
    id : 1,
    description: 'Learn to Dance' 
  }

  constructor() { }

  ngOnInit(): void {
  }

}