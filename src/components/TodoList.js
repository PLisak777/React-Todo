import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
            <button className='clear' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;