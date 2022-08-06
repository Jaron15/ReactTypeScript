import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
}
type Props = {
    children?: React.ReactNode
  };
  

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    deleteTodo: (id: string) => {}
})

const TodosContextProvider: React.FC<Props> = ({children}) => {
    //if you dont define the type for state here and just have useState([])
  //the type will be never which means it will always be a null array you have to define that it will be an array of 'Todos'
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    // const item = todos.findIndex(todo => todo.id === todoId);

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
};

export default TodosContextProvider;