import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
 isLoading:boolean = false;
  todos:ITodo[] = [];
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    // console.log('print on page load');
    this.isLoading = true;
    this.todoservice.getTodos().subscribe((data: ITodo[]) => {
    this.isLoading = false;
    this.todos = data;
console.log('Todos recieved', this.todos);
    });
  }

}
