import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddTodo } from '../../store/todo.action';
import { TodoState } from '../../store/todo.state';

@Component({
  selector: 'app-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {


  constructor(private store: Store){}

  newTitle!: string;

  add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
  }
}
// this.store.dispatch(new AddTodo(this.newTitle)).subscribe(() => this.form.reset());
// this.store.dispatch(new AddTodo(this.newTitle));
// this.newTitle = "";