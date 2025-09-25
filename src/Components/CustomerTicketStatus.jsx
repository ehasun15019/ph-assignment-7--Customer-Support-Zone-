import React, { use } from 'react'
import CardDesign from './CardDesign';

const CustomerTicketStatus = ({fetchTicketData}) => {
  const ticketData = use(fetchTicketData);

  return (
    <div className='my-5 pt-6 flex gap-3'>
        <div>
            <h4 className='text-[1.1rem] font-semibold'>Customer Tickets</h4>

           <div className="grid grid-cols-2 gap-4 mt-3">
                {ticketData.map((ticket) => (
                    <CardDesign key={ticket.id} ticket={ticket}/>
                ))}
            </div>
        </div>

        {/* status section */}
        <div>
            <p>status section</p>
        </div>
    </div>
  )
}

export default CustomerTicketStatus