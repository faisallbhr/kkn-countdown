import { useState, useEffect } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  end: boolean;
};

const useCountdown = (startDate: Date, endDate: Date): TimeLeft | null => {
  const calculateTimeLeft = (milliseconds: number): TimeLeft => {
    const twoDigit = (num: number) => String(num).padStart(2, "0");

    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);

    return {
      days: twoDigit(days),
      hours: twoDigit(hours),
      minutes: twoDigit(minutes),
      seconds: twoDigit(seconds),
      end: milliseconds <= 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      if (now >= endDate) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          end: true,
        });
      } else {
        const difference = +endDate - +now;
        setTimeLeft(calculateTimeLeft(difference));
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  return timeLeft;
};

export default useCountdown;
