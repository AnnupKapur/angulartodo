import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'The first', 
        completed:false
      },
      {
        content:'Second ToDo', 
        completed:true
      }
    ];
  }

  toggleDone(index: number) {
    this.todos.map((v, i) => {
      if(i==index) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(index: number){
    this.todos = this.todos.filter((v,i) => i !== index)
  }

  addTodo(){
    this.todos.push({
        content: this.inputTodo,
        completed: false
      });

      this.inputTodo = "";
  }

}