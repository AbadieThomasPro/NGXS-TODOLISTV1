import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
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

  newTitle!: string;


  constructor(private store: Store){}


  add() {
    this.store.dispatch(new AddTodo(this.newTitle)).subscribe(() => {
      this.newTitle = "";
    });
  }
}