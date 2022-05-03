import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form>
      <input
        placeholder="Add a todo"
        name="task"
        value={newTask}
        onChange={handleChange}
      />
      <button type="button" onClick={submitTodo}>Add task</button>
      <hr />
    </form>
  );
}

AddTask.propTypes = {
  addTodo: PropTypes.func,
}.isRequired;

export default AddTask;
