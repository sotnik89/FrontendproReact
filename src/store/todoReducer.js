// 1. Початковий стан (Initial State)
const initialState = {
    todos: []
};

// 2. Типи екшенів (Action Types)
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CLEAR_TODOS = 'CLEAR_TODOS';

// 3. Редюсер (Reducer)
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] // payload містить об'єкт { id, text }
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload) // payload містить id
            };
        case CLEAR_TODOS:
            return {
                ...state,
                todos: []
            };
        default:
            return state;
    }
};

// 4. Генератори екшенів (Action Creators)
export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: id });
export const clearTodosAction = () => ({ type: CLEAR_TODOS });