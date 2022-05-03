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
    <li>
      {title}
      <button type="button">doing</button>
      <button type="button" onClick={handleComplete}>done</button>
      <button type="button" onClick={handleDelete}>delete</button>
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
