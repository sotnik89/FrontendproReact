import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todoSlice.js';
import todoThunkReducer from './slice/todoThunkSlice.js';


export const store = configureStore({
    reducer:{
        todos: todoReducer,
        todoThunk: todoThunkReducer
    }

})
