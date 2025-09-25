import React from 'react'

const TaskStatus = ({ selectedCard, onComplete }) => {
  return (
    <div>
      <h3 className='text-[1.2rem] font-semibold'>Task Status</h3>

      <div>
        {selectedCard.length === 0 && (
          <p className='text-gray-600 mt-3'>
            Select a ticket to add to Task Status
          </p>
        )}

        {selectedCard.map((ticket) => (
          <div
            key={ticket.id}
            className='bg-white shadow w-[300px] px-4 py-5 mt-4'
          >
            <p className='font-semibold'>{ticket.title}</p>

            <button
              onClick={() => onComplete(ticket)} 
              className='bg-green-600 w-full text-white py-2 mt-3 rounded cursor-pointer'
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskStatus
