import { useSelector } from 'react-redux';
import Todo from './components/Todo/Todo.jsx';
import TodoThunk from "./components/Todo/TodoThunk.jsx";

function App() {
    const totalTodos = useSelector(state => {
        const items = state.todoThunk.items;
        return items ? Math.min(items.length, 5) : 0;
    });
    // const totalTodos = useSelector(state => state.todos.todos.length);
    return (
        <div className='app_container'>
            <main>
                {/*<Todo />*/}
                <TodoThunk />
            </main>
            <footer>
                <p>
                    Total number of tasks: <strong>{totalTodos}</strong>
                </p>
            </footer>
        </div>
    );
}

export default App;
