import { Component } from '@angular/core';
import { Store, select } from '@ngxs/store';
import { TodoModel, TodoState } from '../../store/todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

  // dropping$: Observable<DroppingModel | undefined> = this.store.select(DroppingState.dropping);
  // dropping = select(DroppingState.dropping);

  // items$: Observable<TodoModel[]> = this.store.select(TodoState.items);
  // items = select(TodoState.items);

  // doneItems$ = Observable<TodoModel[]> = this.store.select(TodoState.doneItems);

  doneItems = select(TodoState.doneItems)

  activeItems = select(TodoState.activeItems)

  constructor(private store: Store){}

}
