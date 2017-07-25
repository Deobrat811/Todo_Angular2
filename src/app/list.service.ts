import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';
import { TodoList } from './todo';

@Injectable()
export class ListService {
    jsonFileURL: string = "./app/data.json";
    todoitem: TodoList = new TodoList();
    todolist: TodoList[];
    constructor(private http: Http) {
        console.log(this.todoitem);
    }
    getTodoItem(todoitem: TodoList) {
        this.todoitem = todoitem;
        console.log(this.todoitem);
    }

    getData(): Observable<TodoList[]> {

        return this.http.get(this.jsonFileURL)
            .map((response: Response) => {
                this.todolist = (<TodoList[]>response.json() || []);
                this.todolist.push(this.todoitem);
                return this.todolist;
            });
    }
}
