import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return(
    <div>
      <p> Have you gone through debugginf lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propType = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
