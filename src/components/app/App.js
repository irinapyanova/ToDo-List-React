import { Component } from 'react';
import DateHeader from '../date-header/date-header'
import TodoList from '../todo-list/todo-list';
import BtnAdd from '../btn-add/btn-add';
import TodoAddForm from '../todo-add-form/todo-add-form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {todo: 'Помыть посуду', done: false, id: 1},
        {todo: 'Поесть', done: true, id: 2},
        {todo: 'Сходить в магазин', done: false, id: 3},
      ]
    }
    this.maxId = 4;
  }

  addItem = (todo) => {
    const newItem = {
      todo,
      done: false, 
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onTodoComplete = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, done: !item.done}
        }
        return item;
      })
    }))
  }

  render() {
    return (
      <div className="App">
        <DateHeader/>
        <TodoList data={this.state.data}
                  onTodoComplete={this.onTodoComplete}/>
        <BtnAdd/>
        <TodoAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
