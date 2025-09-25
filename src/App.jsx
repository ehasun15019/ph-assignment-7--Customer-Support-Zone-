import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProgressResolve from './Components/ProgressResolve'

const App = () => {
  return (
    <div className=''>
      <Navbar/>

      <div className='px-12'>
        <ProgressResolve/>
      </div>

      <Footer/>
    </div>
  )
}

export default App