import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddComponent } from './add.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todolist.component';
import { TodoList } from './todo';
import { ListService } from './list.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, HomeComponent, AddComponent, TodoListComponent
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
