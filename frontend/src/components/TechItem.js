import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={() => { onDelete(tech) }}>X</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

// O propType de tech não tem isRequired porque possui um defaultProps
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
