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
var list_service_1 = require("./list.service");
var TodoListComponent = (function () {
    function TodoListComponent(listServiceObj) {
        this.listServiceObj = listServiceObj;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    TodoListComponent.prototype.getList = function () {
        var _this = this;
        this.listServiceObj.getData().subscribe(function (todolist) { return _this.todolist = todolist; });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: './html/todolist.component.html',
        styleUrls: ['./css/todolist.component.css'],
        providers: [list_service_1.ListService]
    }),
    __metadata("design:paramtypes", [list_service_1.ListService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todolist.component.js.map