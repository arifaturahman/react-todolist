import React from "react";
import PropTypes from "prop-types";

//props adalah sebuah objek dimana dia akan menerima apapun yang akan diberikan kedalam komponen Todo ini.
const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

//bertipe required yang artinya dia harus diberikan sebuah props text.
Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
