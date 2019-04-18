import React from 'react';

function Header(props){
  var myHeaderStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    fontSize: '1.2em'

  };
  return (
    <div style={myHeaderStyles}>
      <h1>Help Queue!!</h1>
    </div>
  );
}

export default Header;
