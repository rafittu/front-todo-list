import React from 'react';
import PropTypes from 'prop-types';

function Tasks({ id, title }) {
  return (
    <li id={id}>
      {title}
    </li>
  );
}

Tasks.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}.isRequired;

export default Tasks;
