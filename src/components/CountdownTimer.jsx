"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the initial time
  const initialTime = {
    days: 3,
    hours: 24,
    minutes: 0,
    seconds: 0,
  };

  // Get time from local storage or use the initial time
  const getTime = () => {
    const savedTime = localStorage.getItem('countdownTime');
    return savedTime ? JSON.parse(savedTime) : initialTime;
  };

  // Save time to local storage
  const saveTime = (time) => {
    localStorage.setItem('countdownTime', JSON.stringify(time));
  };

  // Decrease the time
  const decreaseTime = (time) => {
    if (time.seconds > 0) {
      time.seconds--;
    } else if (time.minutes > 0) {
      time.minutes--;
      time.seconds = 59;
    } else if (time.hours > 0) {
      time.hours--;
      time.minutes = 59;
      time.seconds = 59;
    } else if (time.days > 0) {
      time.days--;
      time.hours = 23;
      time.minutes = 59;
      time.seconds = 59;
    }
    return time;
  };

  // Set the initial state
  const [time, setTime] = useState(getTime());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = decreaseTime({ ...prevTime });
        saveTime(newTime);
        return newTime;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
     
      <p> {`${time.days} : ${time.hours} : ${time.minutes} : ${time.seconds}`}</p>
    </div>
  );
};

export default CountdownTimer;
