"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_1 = require("./todo");
var list_service_1 = require("./list.service");
var AddComponent = (function () {
    function AddComponent(listObject) {
        this.listObject = listObject;
        this.todoitem = new todo_1.TodoList();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addTodo = function () {
        this.todoitem.name = this.todoname;
        this.todoitem.description = this.tododescription;
        this.todoitem.date = this.tododate;
        this.listObject.getTodoItem(this.todoitem);
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        selector: 'new-todo',
        templateUrl: './html/add.component.html',
        styleUrls: ['./css/add.component.css'],
    }),
    __metadata("design:paramtypes", [list_service_1.ListService])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map