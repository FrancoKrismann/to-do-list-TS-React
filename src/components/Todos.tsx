import { ListOfTodos, type TodoSuccess, type TodoId } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }:TodoId) => void
    onToggleComplete : ({ id, completed }:TodoSuccess) => void
}

export const Todos:React.FC<Props> = ({todos, onRemoveTodo, onToggleComplete}) => {
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