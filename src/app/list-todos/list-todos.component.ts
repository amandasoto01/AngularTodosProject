import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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
  
  todos : Todo[]
  message: string
  //  = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(1, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(1, 'Visit Australia', false, new Date())

    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become an Expert at Angular'},
    // {id: 3, description: 'visit Australia'},
  //]
  todo = {
    id : 1,
    description: 'Learn to Dance' 
  }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  
  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response=>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
    
  }

}
