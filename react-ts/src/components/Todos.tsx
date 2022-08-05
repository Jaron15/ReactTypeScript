
//React.FC is a predefined generic type that stands for react functional component
//inside the <> we define what kind of props are expected to be passed in 
//in this case an object with a key/val pair of items which is an array of strings 'string[]'
const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
        {props.items.map(item => 
            (<li key={item}>{item}</li>)
            )}
    </ul>
  )
}

export default Todos