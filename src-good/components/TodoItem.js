import React from "react";

function toggleCheckbox()
{
  console.log("Toggle checkbox.");
}

function TodoItem(props) {
  return(
    <div className="todo-item">
      {/*<input type="checkbox" checked={props.completed}/>
      <p>{props.text}</p>*/}
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={toggleCheckbox}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
