import { useState } from "react";
import './todo-add-form.css'

const TodoAddForm = ({onAddTodo}) => {
    const [todo, setTodo] = useState('');

    const onValueChange = (e) => {
        setTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(todo);
        setTodo('');
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit(e)
        }
    }

    return (
        <div className="todo-add-form">
            <form className="add-form"
                onSubmit={onSubmit}>
                <input type="text"
                    className="todo-input"
                    maxLength={15}
                    name="todo"
                    placeholder="What do you want to do today?"
                    value={todo}
                    onChange={onValueChange}
                    onKeyDown={onKeyPress} />
                <button type="submit"
                    className="btn-form-add">Add task</button>
            </form>
        </div>
    )
}

export default TodoAddForm;