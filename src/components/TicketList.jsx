import React from 'react';
import Ticket from './Ticket';

function TicketList(props){
  var myStyledTicketList ={
    backgroundColor: '#ffe4e1',
    fontFamily: 'verdana',
    paddingTop: '50px'
  };
  return (
    <div style={myStyledTicketList}>
      <Ticket
        location="3A"
        names="Thato and Haley"
        issue="Firebase will not save record!"/>
    </div>
  );
}

export default TicketList;
