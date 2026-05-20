import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
        name: "todo",
        initialState,
    reducers: {
        addTodoAction(state, action){
            state.todos.push(action.payload)
        },
        deleteTodoAction(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        clearTodosAction(state){
            state.todos = []
        }
    }
});
export const {
    addTodoAction,
    deleteTodoAction,
    clearTodosAction
} = todoSlice.actions

export default todoSlice.reducer;
