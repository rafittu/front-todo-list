import React from 'react';
import PropTypes from 'prop-types';

import '../style/Todo.css';

function Tasks({
  id, title, updateTodo, deleteTodo,
}) {
  const handleComplete = () => {
    updateTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleStatus = (e) => {
    let taskColor;
    if (e.target.id === 'btn-doing') {
      taskColor = e.target;
      taskColor.style.backgroundColor = '#FAD85F';
    } else if (e.target.id === 'btn-done') {
      taskColor = e.target;
      taskColor.style.backgroundColor = '#407DF7';
      handleComplete();
    }
  };

  return (
    <li className="todo">
      {title}
      <button type="button" id="btn-doing" onClick={handleStatus}>doing</button>
      <button type="button" id="btn-done" onClick={handleStatus}>done</button>
      <button type="button" id="btn-delete" onClick={handleDelete}>delete</button>
    </li>
  );
}

Tasks.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completeTask: PropTypes.func,
  deleteTodo: PropTypes.func,
}.isRequired;

export default Tasks;
