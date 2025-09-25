import React from 'react'

const CardDesign = ({ ticket }) => {

    // conditional rendering for priority function
    const getPriorityColor = (priority) => {
        if (priority === "High priority") {
            return "text-red-500 font-semibold"
        };

        if (priority === "Medium priority") {
            return "text-yellow-500 font-semibold"
        };

        if (priority === "Low priority") {
            return "text-green-500 font-semibold"
        };
    };

  return (
    <div className="card w-96 bg-base-100 card-xs shadow-sm p-3">
      <div className="card-bodies">
        <div className='flex justify-between items-center w-full'>
          <h2 className="card-title flex-1">{ticket.title}</h2>
          <p className='text-[0.9rem] bg-green-500 px-3 py-1 rounded-full'>{ticket.status}</p>
        </div>

        <p className='text-[0.8rem] py-2 text-gray-400'>{ticket.description}</p>

        <div className="flex justify-between text-[0.8rem]">
          <div className='flex gap-3'>
            <p>{ticket.number}</p>
            
            {/* conditional rendering for priority function implement */}
            <p className={getPriorityColor(ticket.priority)}>{ticket.priority}</p>
          </div>

          <div className='flex gap-3'>
            <p>{ticket.customer}</p>
            <p>{ticket.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
