import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, deleteTodoAction, clearTodosAction } from '../../store/slice/todoSlice.js';

import './Todo.css'

export default function Todo() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue
        };
        dispatch(addTodoAction(newTodo));
        setInputValue('');
    };
    return (
        <div className='todo_container'>
            <h2>TODO App</h2>
            <form onSubmit={handleAdd}>
                <input
                    className='input_style'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter new task..."
                />
                <button type="submit" className="button-create">Create</button>
            </form>
            {todos.length > 0 && (
                <button
                    className='button-clear_all'
                    onClick={() => dispatch(clearTodosAction())}
                >
                    Clear all
                </button>
            )}
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}
                    >
                        <span className="todo-number">{index + 1}. </span>
                        <span>{todo.text}</span>
                        <button
                            className='button-delete'
                            onClick={() => dispatch(deleteTodoAction(todo.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}