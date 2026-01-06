import React, { useState, useEffect } from 'react';

const Clock = ({ className }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      };

      // Format the time without comma
      const formattedTime = now.toLocaleString('en-US', options).replace(',', '');

      setTime(formattedTime);
    };

    updateTime(); // Call initially to avoid delay

    const interval = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <p className={className}>
      {time}
    </p>
  );
};

export default Clock;
