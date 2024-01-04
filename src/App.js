import React, { useState } from 'react'
import CountdownTimer from './CountdownTimer'
const App = () => {
  const [userDate, setUserDate] = useState(new Date())
  const handleDateChange = (e) => {
    setUserDate(e.target.value)
  }
  return (
    <div>
      <label htmlFor="userDateInput">Enter a Date:</label>
      <input
        type="date"
        id="userDateInput"
        value={userDate}
        onChange={handleDateChange}
      />
      {console.log(`user Date from app ${userDate}`)}
      <CountdownTimer date={userDate} />
    </div>
  )
}

export default App
