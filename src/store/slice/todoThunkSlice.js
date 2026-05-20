import { createSlice } from "@reduxjs/toolkit";
import { getTodos, getTodosById, createTodo, deleteTodo } from "../thunks/todoThunk.js";

const initialState = {
    items: [],
    selectedTask: null,
    loading: false,
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
                const shuffled = [...action.payload].sort(() => 0.5 - Math.random());
                state.items = shuffled.slice(0, 5);
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
                const newTodo = { ...action.payload, id: Date.now() };
                state.items.unshift(newTodo);

                // state.items.unshift(action.payload);
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