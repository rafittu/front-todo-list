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
    <li id={id}>
      <input type="checkbox" onClick={handleComplete} />
      {title}
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
