
const initialState = {
    todos: []
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CLEAR_TODOS = 'CLEAR_TODOS';

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
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

export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: id });
export const clearTodosAction = () => ({ type: CLEAR_TODOS });