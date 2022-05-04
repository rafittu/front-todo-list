import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../style/Todo.css';

function AddTask({ addTodo }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setNewTask(value);
  };

  const submitTodo = () => {
    addTodo(newTask);
    setNewTask('');
  };

  return (
    <form id="todo-form">
      <input
        placeholder="Add a todo"
        name="task"
        id="input-todo"
        value={newTask}
        onChange={handleChange}
      />
      <button type="button" id="btn-add-todo" onClick={submitTodo}>Add task</button>
      <hr />
    </form>
  );
}

AddTask.propTypes = {
  addTodo: PropTypes.func,
}.isRequired;

export default AddTask;
