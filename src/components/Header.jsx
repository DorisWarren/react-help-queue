import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var myHeaderStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    fontSize: '1.2em'

  };
  return (
    <div style={myHeaderStyles}>
      <h1>Help Queue!!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
