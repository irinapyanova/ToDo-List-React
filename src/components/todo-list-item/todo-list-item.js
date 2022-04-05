import './todo-list-item.css';

const TodoListItem = (props) => {
    const {todo, complete, onCompleteTodo, onDeleteTodo} = props;

    let classNames = 'todo-list-item';
    if (complete) {
        classNames += ' complete'
    }

    return (
        <li className={classNames}>
            <div className="todo-list-wrapper" onClick={onCompleteTodo}>
                <p className="todo-list-item-text">{todo}</p>
                <span className="todo-list-item-icon todo-list-item-icon--circle"></span>
            </div>
            <span className="todo-list-item-icon todo-list-item-icon--delete"
            onClick={onDeleteTodo}></span>
        </li>
    )
}

export default TodoListItem;