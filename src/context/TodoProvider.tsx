import { ListOfTodos, TodoTitle } from "../types/types";
import { TodoContext } from "./TodoContext";
import { INITIAL_STATE, todoReducer } from "./todoReducer";
import { useEffect, useReducer } from "react";


// {
    //   id: "1",
    //   title: "Estudiar Typescript",
    //   completed: true,
    // },
    // {
    //   id: "2",
    //   title: "Entrenar",
    //   completed: false,
    // },
    // {
    //   id: "3",
    //   title: "Ver Netflix",
    //   completed: false,
    // },
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  useEffect(() => {
    const value = localStorage.getItem("Todo")
    const result = value ? JSON.parse(value) : undefined 
    
     
  },[])

  const handleAddTodo = ({ title }: TodoTitle): void => {
    console.log("titleNew",title);
    
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    dispatch({ type: "addTodo", payload: newTodo });
  };

  

  return (
    <TodoContext.Provider
      value={{
        todoState,
        handleAddTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
