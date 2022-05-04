import React from 'react';
import PropTypes from 'prop-types';

function Tasks({
  id, title, updateTodo, deleteTodo,
}) {
  const handleComplete = () => {
    updateTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="todo">
      {title}
      <button type="button" id="btn-doing">doing</button>
      <button type="button" id="btn-done" onClick={handleComplete}>done</button>
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
