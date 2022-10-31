import { render, screen, fireEvent } from '@testing-library/react';
import toBeInTheDocument from '@testing-library/jest-dom'
import TodoForm from './TodoForm';
import userEvent from '@testing-library/user-event';

test('render TodoForm', () => {
    render(<TodoForm />);
    const form = screen.getByRole('form');
    const input = screen.getByPlaceholderText('task...');
    const btn = screen.getByRole('button');
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
})

test('enter value input TodoForm', () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText('task...');
    fireEvent.input(input, {
        target: { value: "123" }
    });
    expect(input.value).toBe('123');
})

test('submit TodoForm', () => {
    const addNewTask = jest.fn();
    render(<TodoForm addNewTask={addNewTask} />);

    const btn = screen.getByText('ADD...');
    userEvent.click(btn)

    expect(addNewTask).toHaveBeenCalledTimes(1);
})