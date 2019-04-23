import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todoData from './models/todoData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
      //todoComponents: todoData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>);

    return (
      <div className="todo-list">
        {/*this.state.todoComponents*/}
        {todoItems}
      </div>
    );
  }
}

export default App;
