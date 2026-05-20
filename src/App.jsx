import { useSelector } from 'react-redux';
import TodoThunk from "./components/Todo/TodoThunk.jsx";

function App() {
    const totalTodos = useSelector(state => state.todoThunk.items.length);
    // const totalTodos = useSelector(state => state.todos.todos.length);
    return (
        <div className='app_container'>
            <main>
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


