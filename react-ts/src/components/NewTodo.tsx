import React, {useRef, useContext} from 'react'
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

//passing in the addTodo function which expexts a string as an argument and doesnt return anything
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    //inputRef types can be found under HMTL(*type*)Element
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

//the question mark after current means that it wil check to see if there is a current value if not it will store null for enteredText
//the exclamation mark means that it cannot be null and returns the non null value 
        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            // throw an error 
            return;
        }

        todosCtx.addTodo(enteredText);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} /> 
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo