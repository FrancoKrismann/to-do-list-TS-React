import { Todo, TodoState } from "../interface/interface";
import { ListOfTodos } from "../types/types";



export const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos_array: [],
    completed: 0,
    pending: 0,
  };


type TodoAction = 
| {type:"loadInfo", payload:ListOfTodos}
| {type:"addTodo", payload:Todo}
| {type:"toggleTodo", payload:{id:string}}



export const todoReducer = (state: TodoState, action: TodoAction):TodoState => {
console.log("reducerAction",action.payload);

    switch (action.type){
        case "addTodo":
            return {
                ...state,
                todos_array: [...state.todos_array, action.payload]
                
            }
        case "loadInfo":
            return {
                ...state,
                todos_array:action.payload
            }

            default:
                return state;
    }

    
    
}
