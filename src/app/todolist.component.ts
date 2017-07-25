import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'
import { TodoList } from './todo'
@Component({
  selector: 'todo-list',
  templateUrl: './html/todolist.component.html',
  styleUrls: ['./css/todolist.component.css'],
  providers: [ListService]
})
export class TodoListComponent {
  
  todolist: TodoList[];

  constructor(private listServiceObj: ListService) {

  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.listServiceObj.getData().subscribe(todolist => this.todolist = todolist)
   
    
  }

}
