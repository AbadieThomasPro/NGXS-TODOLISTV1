import { Injectable } from "@angular/core";
import { Action, State, StateContext, Selector, Store } from "@ngxs/store";
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

    //sélectionne les items
    @Selector()
    static items(state: TodoStateModel) {
        return state.items;
    }

    //sélectionne les items terminés
    @Selector()
    static doneItems(state: TodoStateModel) {
        return state.items.filter((item) => !item.isActive);
    }

    //sélectionne les items actifs
    @Selector()
    static activeItems(state: TodoStateModel) {
        return state.items.filter((item) => item.isActive);
    }



    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {

        const state = ctx.getState();
        const newItem: TodoModel = {
            id: Math.floor(Math.random() * 1000),
            title: action.title,
            isActive: true
        };

        ctx.setState({
            ...state,
            items: [...state.items, newItem]
        })
    }
}
