import { useContext, useEffect } from "react"
import { TodoContext } from "../context/TodoContext"


export const useTodo = () => {

    const {todoState, handleAddTodo} = useContext(TodoContext)

    const {todos_array} = todoState

    useEffect(() => {
        localStorage.setItem("Todo", JSON.stringify(todos_array))
    },[todos_array])

return {
    todos_array,
    handleAddTodo
}
}
