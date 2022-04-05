import { useState } from 'react';
import './list-add-form.css';

const ListAddForm = ({onAddList}) => {
    const [listName, setListName] = useState('');

    const onValueChange = (e) => {
        setListName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddList(listName);
        setListName('');
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSubmit(e)
        }
    }

    return (
        <div>
            <form className="list-add-form"
                onSubmit={onSubmit}>
                <input type="text"
                  className="list-add-input"
                  placeholder="New list name"
                  value={listName}
                  onChange={onValueChange}
                  onKeyDown={onKeyPress}/>
                <button className="list-add-form-btn">Add list</button>
            </form>
        </div>
    )
}

export default ListAddForm;