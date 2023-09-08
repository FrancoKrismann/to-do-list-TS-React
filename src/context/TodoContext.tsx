import {createContext} from "react"
import { TodoState } from "../interface/interface"
import { TodoTitle } from "../types/types";


export interface TodoContextProps {
    todoState: TodoState
    handleAddTodo: ({title}:TodoTitle) => void; 
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps) 