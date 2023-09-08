import { ListOfTodos, type TodoSuccess, type TodoId } from "../types/types"
import { Todo } from "./Todo"

//Buena practica Typescript syntax
type Props = Readonly< {
    todos: ListOfTodos
    onRemoveTodo: ({ id }:TodoId) => void
    onToggleComplete : ({ id, completed }:TodoSuccess) => void
}>

export const Todos = ({todos, onRemoveTodo, onToggleComplete}:Props) => {
    console.log("todos",todos);
    
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li 
                key={todo.id}
                className={`${todo.completed ? "completed" :""}`}
                >
                    <Todo 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggleCompleteTodo = {onToggleComplete}
                    onRemoveTodo={onRemoveTodo}
                    />
                    
                </li>
            ))}
        </ul>
    )
}