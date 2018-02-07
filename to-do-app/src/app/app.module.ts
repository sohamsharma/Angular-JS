import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { DummyComponent } from './components/dummy/dummy.component';
import {FormsModule} from '@angular/forms';
import { ServerService } from 'app/components/todo/server.service';
import { HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: TodoComponent},
      {path: 'dummy', component: DummyComponent}
    ])
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
