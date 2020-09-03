import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

handleChange = (e) => {
    this.setState({
        todo: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo)
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='todo'
                placeholder='Add New Todo'
                value={this.state.todos}
                onChange={this.handleChange}
                />  
                <button onClick={this.addTodo}>Add</button>      
            </form>
        )
    }
}

export default TodoForm