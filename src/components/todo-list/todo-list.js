import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = (props) => {
    const {todoList, onCompleteTodo, onDeleteTodo} = props;

    const elements = todoList.map(item => {
        const {id, ...itemProps} = item;
        return(
            <TodoListItem
            key={id}
            {...itemProps}
            onCompleteTodo={() => onCompleteTodo(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
            />
        );
    })

    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList;