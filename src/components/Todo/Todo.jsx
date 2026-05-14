import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, deleteTodoAction, clearTodosAction } from '../../store/todoReducer';

import './Todo.css'

export default function Todo() {
    const [inputValue, setInputValue] = useState('');

    // Отримуємо масив справ із Redux Store
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Створюємо нову справу
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

            <form onSubmit={handleAdd} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введіть нове завдання..."
                    style={{ flexGrow: 1, padding: '8px' }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Додати</button>
            </form>

            {todos.length > 0 && (
                <button
                    className='clear_all'
                    onClick={() => dispatch(clearTodosAction())}
                >
                    Clear all
                </button>
            )}
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                    >
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