import { useState } from 'react';

import "./Home.css"
export default function Home(){
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState({ msg: '', color: 'black' });

    const updateStatus = (msg, color) => {
        setStatus({ msg, color });
    };

    // Завантаження списку
    const loadTodos = async () => {
        updateStatus('⏳ Downloading...', 'orange');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!response.ok) throw new Error();
            const data = await response.json();

            setTodos(data);
            updateStatus('✅ Success', 'green');
        } catch {
            updateStatus('Mistake', 'red');
        }
    };

    // Створення нового завдання
    const addTodo = () => {
        const newTodo = { id: Date.now(), title: 'New task' };
        setTodos([newTodo, ...todos]);
    };

    // Видалення завдання
    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
        updateStatus('Видалено', 'blue');
    };

    return (
        <div className="todo-body">
            <h1>My ToDo List</h1>

            <div className="controls">
                <button onClick={loadTodos}>Download list</button>
                <button onClick={addTodo}>Create new</button>
            </div>

            <div className='status'>
                {status.msg}
            </div>

            <ul id="todoList">
                {todos.slice(0, 10).map((todo) => (
                    <li key={todo.id}>
                        <span style={{ marginRight: '10px' }}>{todo.title}</span>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}