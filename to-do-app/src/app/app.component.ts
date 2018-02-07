import { Component } from '@angular/core';
import {  TodoComponent } from './components/todo/todo.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
}
