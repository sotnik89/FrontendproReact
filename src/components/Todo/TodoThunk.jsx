import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, createTodo, deleteTodo } from "../../store/thunks/todoThunk.js";

export default function TodoThunk() {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const { items: todos, loading, error } = useSelector(state => state.todoThunk);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTodo = {
            title: inputValue,
            completed: false,
            userId: 1
        };

        dispatch(createTodo(newTodo));
        setInputValue('');
    };

    return (
        <div className='todo_container'>
            <h2>TODO App (Thunk)</h2>
            <form onSubmit={handleAdd}>
                <input
                    className='input_style'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter new task..."
                />
                <button type="submit" className="button-create">
                    Create
                </button>
            </form>

            {error && <p style={{ color: 'red', margin: '10px 0' }}>Error: {error}</p>}

            {todos && todos.length > 0 ? (
                <ul>
                    {todos.slice(0, 5).map((todo, index) => (
                        <li key={todo.id}>
                            <span className="todo-number">{index + 1}. </span>
                            <span>
                                {todo.title}
                            </span>
                            <button
                                className='button-delete'
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No tasks found.</p>
            )}
        </div>
    );
}

