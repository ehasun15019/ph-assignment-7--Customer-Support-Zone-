import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProgressResolve from './Components/ProgressResolve'
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
        <ProgressResolve/>
        <CustomerTicketStatus fetchTicketData={fetchTicketData}/>
      </div>

      <Footer/>
    </div>
  )
}

export default App