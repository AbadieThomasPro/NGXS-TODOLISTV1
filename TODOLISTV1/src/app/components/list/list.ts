import { Component } from '@angular/core';
import { Store, createSelectMap } from '@ngxs/store';
import { TodoModel, TodoState } from '../../store/todo.state';
import { ChangeStatus, DeleteTodo } from '../../store/todo.action';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [NgClass],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

  selector = createSelectMap({
    items: TodoState.items,
    doneItems: TodoState.doneItems,
    activeItems: TodoState.activeItems
  });


  constructor(private store: Store){}

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }


  change(item: TodoModel) {
    this.store.dispatch(new ChangeStatus(item, !item.isActive));
  }

  delete(index: number) {
    this.store.dispatch(new DeleteTodo(index));
  }

}
