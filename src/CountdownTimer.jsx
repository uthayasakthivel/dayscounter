import React, { useState, useEffect } from "react"
import "./CountdownTimer.css"
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
      <div className="countdown-container">
        <h1 className="countdown-title">Countdown Timer</h1>
        <p className="countdown-subtitle">
          Time remaining until {targetDate.toDateString()}:
        </p>
        <div className="countdown-timer">
          <div className="countdown-item">
            <p>{timeRemaining.days}</p>
            <span>Days</span>
          </div>
          <div className="countdown-item">
            <p>{timeRemaining.hours}</p>
            <span>Hours</span>
          </div>
          <div className="countdown-item">
            <p>{timeRemaining.minutes}</p>
            <span>Minutes</span>
          </div>
          <div className="countdown-item">
            <p>{timeRemaining.seconds}</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
