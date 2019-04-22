import React from 'react';
import Ticket from './Ticket';

function TicketList() {

    var myStyledTicketList ={
      backgroundColor: '#ffe4e1',
      fontFamily: 'verdana',
      paddingTop: '50px'
    };



    return (
      <div style={myStyledTicketList}>
        {masterTicketList.map((ticket, index) =>
            <Ticket names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              key={index}/>
        )}
      </div>
    );

}

export default TicketList;
