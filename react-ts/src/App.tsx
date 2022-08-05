import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import {useState} from 'react';

function App() {
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
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos onDeleteTodo={deleteTodoHandler} items={todos} />
    </div>
  );
}

export default App;
