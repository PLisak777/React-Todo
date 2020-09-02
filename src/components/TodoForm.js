import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

handleChange = (e) => {
    this.setState({
        item: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item)
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='item'
                value={this.state.item}
                onChange={this.handleChange}
                />        
            </form>
        )
    }
}

export default TodoForm