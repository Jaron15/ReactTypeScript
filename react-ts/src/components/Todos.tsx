
import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

//React.FC is a predefined generic type that stands for react functional component
//inside the <> we define what kind of props are expected to be passed in 
//in this case an object with a key/val pair of items which is a custom class object defined in the models folder
const Todos: React.FC<{items: Todo[]; onDeleteTodo: (todoId: string) => void}> = (props) => {

    
  return (
    <ul className={classes.todos}>
        {props.items.map(item => 
            (<TodoItem 
                //first arg for bind is what 'this' keyword will be, then the first actual argument being passed into the function (item.id) 
                onDeleteTodo={props.onDeleteTodo.bind(null, item.id)} 
                key={item.id} 
                todoText={item.text}></TodoItem>)
            )}
    </ul>
  )
}

export default Todos