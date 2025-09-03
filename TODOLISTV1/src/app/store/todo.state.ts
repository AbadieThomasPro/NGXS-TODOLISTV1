import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddTodo } from "./todo.action";

export interface TodoModel {
    id: number;
    title: string;
    isActive: boolean; 
}

export interface TodoStateModel {
  items: TodoModel[];
}

@State<TodoStateModel>({
    name: "todo",
    defaults: {
        items: []
    },
})
@Injectable()
export class TodoState {
    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();
        // const newItem: TodoModel
    }
}
