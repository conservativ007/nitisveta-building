import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hours }) => {
 

  useEffect(() => {
    const targetTime = new Date(new Date().getTime() + hours * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const newTime = calculateTimeLeft(targetTime);
      setTimeLeft(newTime);

      if (
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours]);

 

  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60))),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const target = new Date(now.getTime() + hours * 60 * 60 * 1000);
    return calculateTimeLeft(target);
  });

  const timeUnits = [
    { label: 'часы', value: timeLeft.hours },
    { label: 'мин', value: timeLeft.minutes },
    { label: 'сек', value: timeLeft.seconds },
  ];

  return (
<div className="flex gap-10 justify-center items-center">
  {timeUnits.map((unit, index) => (
    <div
      key={index}
      className="relative w-20 h-20"
    >
      <div className="absolute inset-0 rotate-45 rounded-xl bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500"></div>
      <div className="absolute inset-[2px] rotate-45 rounded-xl bg-gray-900 flex items-center justify-center">
        <div className="-rotate-45 flex flex-col items-center text-white">
          <span className="text-2xl font-bold">{String(unit.value).padStart(2, '0')}</span>
          <span className="text-sm uppercase">{unit.label}</span>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default CountdownTimer;
