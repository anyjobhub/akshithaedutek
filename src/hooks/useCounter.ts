import { useEffect, useState } from 'react';

export function useCounter(end: number, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isActive]);

  return count;
}
