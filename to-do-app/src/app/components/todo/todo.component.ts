import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'app/components/todo/server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent{
  public toDos = [];
  public countDone: number = 0;
  public countNotDone: number = 0;
  public l: number = 0;
  public toDoText;
  public toDoApp = [];
  constructor(private ServerService: ServerService) {
    this.toDoGet();
  }
  private generateId(){
    return Math.round(Math.random() * 10000);
  }
  thecount(){
    this.countDone = this.toDoApp.length;
    console.log(this.toDoApp);
    this.countNotDone = 0;
    this.toDoApp.forEach(toDo => {
      if(toDo[status] == true){
        this.countDone++;
      }
    });
    this.l = this.toDoApp.length;
    this.countNotDone = this.l-this.countDone;
  }
  theCountDone(){
    this.countDone = this.toDos.length;
    this.countNotDone = 0;
    this.toDos.forEach(toDo => {
      if(toDo[status] == false){
        this.countDone--;
      }
    });
    return this.countDone;
  }

  thecountNotDone(){

    this.l = this.toDos.length;
    this.countNotDone = this.l-this.countDone;
    return this.countNotDone;
  }
  count(index){
    if(this.toDos[index].status){
      this.countDone++;
      this.countNotDone--;
    }
    else{
      this.countDone--;
      this.countNotDone++;
    }
  }
  toggle(index) {
    this.toDos[index].status = !this.toDos[index].status;
    this.ServerService.storeServers(this.toDos).subscribe(
      (response) =>console.log(response),
      (error) => console.log(error)
    );
  }
  toDoGet(){
    this.ServerService.getServers().subscribe(
      (servers: any[]) => this.toDos = servers,
      (error) => console.log(error)
    );
  }
  toDoAdd(){
      if(this.toDoText != null){
      //   this.toDos.push({

      //     task:this.toDoText,
      //     status:false
      //   });
        this.toDos.push({
          task: this.toDoText,
          status: false,
          id: this.generateId()
        }
        );

        this.ServerService.storeServers(this.toDos).subscribe(
          (response) =>console.log(response),
          (error) => console.log(error)
        );

        this.toDoText = null;
        this.thecount();
      }
    }
}
