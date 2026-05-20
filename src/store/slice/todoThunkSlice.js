import { createSlice } from "@reduxjs/toolkit";
import { getTodos, getTodosById, createTodo, deleteTodo } from "../thunks/todoThunk.js";

const initialState = {
    items: [], // 2. Исправили todos на items, чтобы совпадало с остальным кодом
    selectedTask: null,
    loading: false, // Явно объявляем, чтобы избежать warning-ов в консоли
    error: null
}

const todoThunkSlice = createSlice({
    name: "todoThunk",
    initialState,
    reducers: {
        clearSelectedTask(state) {
            state.selectedTask = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(getTodosById.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getTodosById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedTask = action.payload
            })
            .addCase(getTodosById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(createTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.items.unshift(action.payload);
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(deleteTodo.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const {
    clearSelectedTask
} = todoThunkSlice.actions;

export default todoThunkSlice.reducer;