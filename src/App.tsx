import { useState } from "react";
import { Todos } from "./components/Todos";
import { type FilterValue, type TodoId, type TodoSuccess } from "./types";
import { Footer } from "./components/Footer";
import { TODO_FILTERS } from "./consts";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSuccess = ({ id, completed }: TodoSuccess): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemoveAllCompleted = ():void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos);
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <Todos
        onToggleComplete={handleSuccess}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />

      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
