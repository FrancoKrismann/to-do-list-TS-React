import { useMemo, useCallback, useState, useEffect } from "react";
import { Header } from "../Header";
import { Todos } from "../Todos";
import {
  ListOfTodos,
  type FilterValue,
  type TodoId,
  type TodoSuccess,
} from "../../types/types";
import { Footer } from "../Footer";
import { TODO_FILTERS } from "../../consts";
import { useTodo } from "../../hooks/useTodo";

export const TodoComponent = (): JSX.Element => {
  const { todos_array, handleAddTodo } = useTodo();

  const [todos, setTodos] = useState<ListOfTodos>([]);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  useEffect(() => {
    setTodos(todos_array);
    
  }, [todos_array]);


  const handleFilterChange = useCallback((filter: FilterValue): void => {
    setFilterSelected(filter);
  }, []);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSuccess = useCallback(
    ({ id, completed }: TodoSuccess): void => {
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
    },
    [todos]
  );

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  const completedCount = todos.length - activeCount;

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
      if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
      return todo;
    });
  }, [filterSelected, todos]);

  console.log(todos);

  // const handleAddTodo = ({title}:TodoTitle): void => {
  //   const newTodo = {
  //     title,
  //     id: crypto.randomUUID(),
  //     completed:false
  //   }
  //   const newTodos = [...todos, newTodo];
  //   setTodos(newTodos)
  // }

  return (
    <>
      <Header onAddTodo={handleAddTodo} />
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
    </>
  );
};
