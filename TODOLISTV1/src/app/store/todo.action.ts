import { TodoModel } from "./todo.state";

const ACTION_SCOPE = '[Todo]';

// export class GetTodo {
//     static readonly type = `${ACTION_SCOPE} Get todo`;
//     constructor(public id: number ) {}
// }

export class AddTodo {
    static readonly type = `${ACTION_SCOPE} Add`;
    constructor(public title: string) {}
}

export class ChangeStatus {
    static readonly type = `${ACTION_SCOPE} Change`;
    constructor(
        public readonly todoItem: TodoModel,
        public readonly status: boolean
    ) {}
}

export class Delete {
    static readonly type = `${ACTION_SCOPE} Delete`;

    constructor(public id: number) {}
}