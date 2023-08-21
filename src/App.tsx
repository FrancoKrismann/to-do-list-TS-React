import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId , type TodoSuccess} from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Estudiar Typescript",
    completed: true,
  },
  {
    id: "2",
    title: "Entrenar",
    completed: false,
  },
  {
    id: "3",
    title: "Ver Netflix",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSuccess = ({id , completed}: TodoSuccess): void => {
    console.log("handleSuccess", completed);
    
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
      onToggleComplete={handleSuccess}
      onRemoveTodo={handleRemove}
      todos={todos} />
    </div>
  );
};

export default App;
