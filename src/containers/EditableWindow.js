import React, { PropTypes } from 'react';

function EditableWindow({ day, type, content }) {
  return (
      <tr className="editable-window"> <td>#{ day }</td> <td>{type}</td> <td>{content}</td> <td>Delete</td></tr>
  );
}

EditableWindow.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default EditableWindow;
