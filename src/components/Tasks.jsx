import React from 'react';
import PropTypes from 'prop-types';

function Tasks({ id, title, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(Number(id));
  };

  return (
    <li id={id}>
      {title}
      <button type="button" onClick={handleDelete}>delete</button>
    </li>
  );
}

Tasks.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  deleteTodo: PropTypes.func,
}.isRequired;

export default Tasks;
