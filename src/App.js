import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [{
  task: 'Stare at ceiling',
  id: Date.now(),
  completed: false
},
{
  task: 'Contemplate suicide vs. work',
  id: Date.now(),
  completed: false
},
{
  task: 'Take shower',
  id: Date.now(),
  completed: false
},
{
  task: 'One more day',
  id: Date.now(),
  completed: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  // design `App` to be the parent component of your application.
  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item, 
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

addTodo = (itemName) => {
  this.setState({
    todos: [
      ...this.state.todos,
      {task: itemName, id: Date.now(), completed: false}
    ]
  })
}

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter((item) => {
      return !item.completed;
    })
  })
}

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTodo={this.addTodo} 
        />
        </div>
        <TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted} 
        />
      </div>
    );
  }
}

export default App;
