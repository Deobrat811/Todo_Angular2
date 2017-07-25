import { Component, OnInit } from '@angular/core';
import { TodoList } from './todo';
import { ListService } from './list.service'
import {TodoListComponent} from './todolist.component'
@Component({
  selector: 'new-todo',
  templateUrl: './html/add.component.html',
  styleUrls: ['./css/add.component.css'],
})
export class AddComponent {
  todoitem:TodoList=new TodoList();
  todoname:any;
  tododescription:any;
  tododate:any;
 
  ngOnInit() {
  }
  constructor(private listObject:ListService) {
        
  }
  addTodo()
  {
    this.todoitem.name = this.todoname;
    this.todoitem.description = this.tododescription;
    this.todoitem.date = this.tododate;
    this.listObject.getTodoItem(this.todoitem);
  }

}
