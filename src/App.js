import React, { useState } from 'react'
import CountdownTimer from './CountdownTimer'
const App = () => {
  const [userDate, setUserDate] = useState(new Date())
  const handleDateChange = (e) => {
    setUserDate(e.target.value)
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen text-[1.2rem] leading-[1.8rem] bg-white bg-[linear-gradient(315deg,#ffffff_0%,#335c81_74%)]'>
      <label htmlFor="userDateInput" className='text-white'>Enter a Date:</label>
      <input className='text-[whitesmoke] w-[11vw] m-4 p-2 box-content border border-gray-300 rounded-md"'
        type="date"
        id="userDateInput"
        value={userDate}
        onChange={handleDateChange}
        style={{ background: 'radial-gradient(black, transparent)' }}
      />
      {console.log(`user Date from app ${userDate}`)}
      <CountdownTimer date={userDate} />
    </div>
  )
}

export default App
