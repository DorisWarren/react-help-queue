import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issues = null;

  function handleNewTicketFormSubmission(event) {
   event.preventDefault();
   _names.value = '';
   _location.value = '';
   _issues.value = '';
 }
  return (

    <div>
     <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issues = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>

  );
}

export default NewTicketForm;
