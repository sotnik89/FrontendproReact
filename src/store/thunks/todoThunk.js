import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/todos"
export const getTodos = createAsyncThunk(
    "todo/getTodos",
    async (payload, thunkAPI) => {
        try {
            const response = await fetch(API_URL)

            if(!response.ok){
                return thunkAPI.rejectWithValue("Failed to fetch task")
            }
            const data = await response.json()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getTodosById = createAsyncThunk(
    "todo/getTodosById",
    async (todoId, thunkAPI) => {
        try {
            const response = await fetch(`${API_URL}/${todoId}`)

            if(!response.ok){
                return thunkAPI.rejectWithValue("Failed to fetch task")
            }
            const data = await response.json()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createTodo = createAsyncThunk(
    "todo/createTodo",
    async (newTodo, thunkAPI) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers:{
                    "Content-type": "application/json"
                }
            })

            if(!response.ok){
                return thunkAPI.rejectWithValue("Failed to create task")
            }
            const data = await response.json()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async (todoId, thunkAPI) => {
        try {
            const response = await fetch(`${API_URL}/${todoId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                return thunkAPI.rejectWithValue("Failed to delete task");
            }
            // JSONPlaceholder повертає порожній об'єкт {}, тому повертаємо id, щоб знати, що видалити в reducer
            return todoId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);