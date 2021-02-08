import React from 'react';
import {Todo} from './Todo'

function formatDate(date) {
    return date.toLocaleDateString();
}

function TodoList(props) {
    const todoList = props.todoList;
    const listItems = 
    todoList.map((todo) =>
    <li >
      <Todo text={todo.text} priority={todo.priority} dueDate={formatDate(todo.dueDate)}> </Todo>
    </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default TodoList;