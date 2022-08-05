import React from 'react'

//props is always an object
//the types of props are defined here between the <>
const TodoItem: React.FC<{ todoText: string}> = (props) => {
  return (
    <li>{props.todoText}</li>
  )
}

export default TodoItem