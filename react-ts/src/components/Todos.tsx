
import Todo from "../models/todo";

//React.FC is a predefined generic type that stands for react functional component
//inside the <> we define what kind of props are expected to be passed in 
//in this case an object with a key/val pair of items which is a custom class object defined in the models folder
const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <ul>
        {props.items.map(item => 
            (<li key={item.id}>{item.text}</li>)
            )}
    </ul>
  )
}

export default Todos