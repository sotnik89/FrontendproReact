import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo.jsx';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Unit-тести для Todo компонента', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue([]);
    });

    test('1. Сторінка має заголовок TODO App', () => {
        render(<Todo />);
        const heading = screen.getByRole('heading', { name: /todo app/i });
        expect(heading).toBeInTheDocument();
    });

    test('2. У поле для тексту можна ввести як цифри, так і букви', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Enter new task...');
        fireEvent.change(input, { target: { value: 'Task 123' } });
        expect(input.value).toBe('123@');
    });

    test('3. Після натискання на кнопку без тексту, новий елемент не створюється', () => {
        render(<Todo />);
        const button = screen.getByRole('button', { name: /create/i });
        fireEvent.click(button);
        expect(mockDispatch).not.toHaveBeenCalled();
    });

    test('4. Після вписання тексту та натискання "Create", інпут очищається', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Enter new task...');
        const button = screen.getByRole('button', { name: /create/i });

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(input.value).toBe('');
        expect(mockDispatch).toHaveBeenCalled();
    });

    test('5. Відображає задачу з потрібним текстом', () => {
        useSelector.mockReturnValue([{ id: 1, text: 'Clean the room' }]);
        render(<Todo />);
        expect(screen.getByText('Clean the room')).toBeInTheDocument();
        expect(screen.getByText('1.')).toBeInTheDocument();
    });
});