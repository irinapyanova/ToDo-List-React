import { Component } from "react";
import './todo-add-form.css'

class TodoAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.todo.length < 1) return;
        this.props.onAdd(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo} = this.state;

        return (
            <div className="todo-add-form">
                <form className="add-form"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="todo-input"
                        maxLength={15}
                        name="todo"
                        value={todo}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="btn-form-add">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TodoAddForm;