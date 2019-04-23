import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import todoData from './models/todoData';

class App extends Component {
  render() {
    const todoComponents = todoData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />);
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    );
  }
}

export default App;
