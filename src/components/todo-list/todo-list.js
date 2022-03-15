import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({data, onTodoComplete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <TodoListItem
            key={id}
            {...itemProps}
            onTodoComplete={() => onTodoComplete(id)}/>
        );
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;