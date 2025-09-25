import React, { Suspense } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CustomerTicketStatus from './Components/CustomerTicketStatus'

// public data fetch
const Data = async () => {
  const res = await fetch("/public.json");
  const data = await res.json();
  return data
}
const fetchTicketData = Data();


const App = () => {
  return (
    <div className=''>
      <Navbar/>

      <div className='px-12'>

        <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
          <CustomerTicketStatus fetchTicketData={fetchTicketData}/>
        </Suspense>
      </div>

      <Footer/>
    </div>
  )
}

export default App