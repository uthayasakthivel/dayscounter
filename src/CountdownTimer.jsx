import React, { useState, useEffect } from "react"
// import "./CountdownTimer.css"
const CountdownTimer = ({ date }) => {
  const targetDate = new Date(date) // convert the object type from 'js obj' to 'Date object'
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [targetDate])

  function calculateTimeRemaining() {
    const now = new Date()
    const difference = targetDate - now

    if (difference <= 0) {
      // Target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  return (
    <div>
      <div className="text-center bg-neutral-100 shadow-[0_0_10px_rgba(0,0,0,0.1)]  my-0 mx-12 md:m-12  p-5 rounded-[10px]">
        <h1 className="text-2xl text-[#333] mb-2.5">DayCount Master</h1>
        <p className="text-base text-[#666] mb-5 countdown-subtitle">
          Time remaining until {targetDate.toDateString()}:
        </p>
        <div className="flex justify-between gap-5 flex-wrap">
          <div className="countdown-item">
            <p className="countdown-item-para">{timeRemaining.days}</p>
            <span className="countdown-item-span">Days</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-item-para">{timeRemaining.hours}</p>
            <span className="countdown-item-span">Hours</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-item-para">{timeRemaining.minutes}</p>
            <span className="countdown-item-span">Minutes</span>
          </div>
          <div className="countdown-item">
            <p className="countdown-item-para">{timeRemaining.seconds}</p>
            <span className="countdown-item-span">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
