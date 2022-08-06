
import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { TodosContext } from "../store/todos-context";

//React.FC is a predefined generic type that stands for react functional component
//inside the <> we define what kind of props are expected to be passed in 
//in this case an object with a key/val pair of items which is a custom class object defined in the models folder
const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);
    
  return (
    <ul className={classes.todos}>
        {todosCtx.items.map(item => 
            (<TodoItem 
                //first arg for bind is what 'this' keyword will be, then the first actual argument being passed into the function (item.id) 
                onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)} 
                key={item.id} 
                text={item.text}></TodoItem>)
            )}
    </ul>
  )
}

export default Todos