import './todo-list-item.css';

const TodoListItem = (props) => {
    const {todo, done, onTodoComplete} = props;
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' complete'
    }

        return (
        <li className={classNames} 
            onClick={onTodoComplete}>
            <p className="todo-list-item-text">{todo}</p>
            <span className="todo-list-item-icon"></span>
        </li>
    )
}

export default TodoListItem;