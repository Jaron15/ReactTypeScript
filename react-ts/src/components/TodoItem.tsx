import React from 'react'
import classes from './TodoItem.module.css';

//props is always an object
//the types of props are defined here between the <>
const TodoItem: React.FC<{ text: string; key: string; onDeleteTodo: () => void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>{props.text}</li>
  )
}

export default TodoItem