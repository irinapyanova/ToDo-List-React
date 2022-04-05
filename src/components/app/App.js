import { useState } from 'react';
import DateHeader from '../date-header/date-header'
import TodoList from '../todo-list/todo-list';
import TodoAddForm from '../todo-add-form/todo-add-form';
import ListSidemenu from '../lists-sidemenu/lists-sidemenu';
import ListAddForm from '../list-add-form/list-add-form';
import './App.css';

const App = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [allLists, setAllLists] = useState([]);

  const onAddTodo = (todo) => {
    if (todo) {
      const newItem = {
        todo,
        complete: false,
        id: Math.random().toString(36).substring(2, 9)
      }

      setTodoList([...todoList, newItem])
    }
  } 

  const onDeleteTodo = (id) => {
    setTodoList([...todoList.filter(item => item.id !== id)]);
  }

  const onCompleteTodo = (id) => {
    setTodoList([
      ...todoList.map(item => 
        item.id === id ? {...item, complete: !item.complete} : {...item}
      )
    ])
  }

  const onAddList = (listName) => {
    if (listName) {
      const newList = {
        name: listName,
        complete: false,
        id: Math.random().toString(33).substring(2, 9)
      }
      
      setAllLists([...allLists, newList]);
    }
  }
  
  return (
    <div className="App">
      <div className="sidemenu">
        <ListSidemenu
          allLists={allLists}/>
        <ListAddForm 
          onAddList={onAddList}/>
      </div>
      <main className="main">
        <DateHeader/>
        <TodoList 
          todoList={todoList}
          onCompleteTodo={onCompleteTodo}
          onDeleteTodo={onDeleteTodo}/>
        <TodoAddForm 
          onAddTodo={onAddTodo}/>
      </main>
    </div>
  );
}

export default App;
