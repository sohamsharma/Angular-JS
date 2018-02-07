import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService{
  constructor(private http:Http){}
  storeServers(servers: any[]){
    const headers= new Headers({'Content-Type' : 'application/json'});
    return this.http.put('https://todo-a60cd.firebaseio.com/aekansh-todo.json',
    servers,
    {headers: headers}
  );

  }

  getServers(){
    return this.http.get('https://todo-a60cd.firebaseio.com/aekansh-todo.json').map(
      (response : Response) => {
        const data = response.json();
        for(const server of data){
          server.task = server.task;
        }
        return data;
      }
    );
  }
}
