import { createStore } from 'redux';
import { todoReducer } from './todoReducer';

// Створення класичного стору
export const store = createStore(todoReducer);