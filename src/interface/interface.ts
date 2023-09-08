import { ListOfTodos } from "../types/types"

export interface Todo {
    id:string
    title:string
    completed:boolean
}

export interface TodoState {
    todoCount:number,
    todos_array:ListOfTodos
    completed:number
    pending:number
}

export interface FilterButton {
    literal: string
    href:string
}

