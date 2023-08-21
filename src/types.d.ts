export interface Todo {
    id:string
    title:string
    completed:boolean
}

export type TodoId = Pick<Todo, `id`>
export type TodoTitle = Pick<Todo, `title`>
export type TodoCompleted = Pick<Todo, `completed`>
export type TodoSuccess = Pick<Todo, `id` | `completed`>


export type ListOfTodos = Todo[]