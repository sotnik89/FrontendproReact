import { useSelector } from 'react-redux';
import Todo from './components/Todo/Todo.jsx';


function App() {
    const totalTodos = useSelector(state => state.todos.todos.length);
    return (
        <div className='app_container'>
            <main>
                <Todo />
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
