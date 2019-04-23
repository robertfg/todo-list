import React from "react";

import PropTypes from 'prop-types';

class TodoItem extends React.Component
{
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="todo-item">
        {/*}<input type="checkbox" checked={props.completed}/>
        <p>{props.text}</p>*/}
        <input type="checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.checkbox.isRequired
};

export default TodoItem;
