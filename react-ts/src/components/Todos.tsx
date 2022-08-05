
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//React.FC is a predefined generic type that stands for react functional component
//inside the <> we define what kind of props are expected to be passed in 
//in this case an object with a key/val pair of items which is a custom class object defined in the models folder
const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
        {props.items.map(item => 
            (<TodoItem key={item.id} todoText={item.text}></TodoItem>)
            )}
    </ul>
  )
}

export default Todos