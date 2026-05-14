import { useSelector } from 'react-redux';
import Todo from './components/Todo/Todo.jsx';



function App() {
    // Отримуємо кількість елементів для футера
    const totalTodos = useSelector(state => state.todos.length);
    return (
        <div className='app_container'>
            {/* Основний контент програми */}
            <main>
                <Todo />
            </main>

            {/* Футер із загальною кількістю елементів */}
            <footer>
                <p>
                    Total number of tasks: <strong>{totalTodos}</strong>
                </p>
            </footer>
        </div>
    );
}

export default App;
