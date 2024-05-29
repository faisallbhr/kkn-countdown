"use client";

import useCountdown from "@/hooks/useCountdown";
import Percentage from "./percentage";

const CountdownComponent = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  const timeLeft = useCountdown(startDate, endDate);

  if (timeLeft === null) {
    return <h3 className="my-10">Loading...</h3>;
  }

  const now = new Date();
  if (now < startDate) {
    return <h3 className="my-10">KKN belum dilaksanakan.</h3>;
  }

  if (timeLeft.end) {
    return (
      <h3 className="my-10">Terima kasih atas 45 harinya, teman-teman :D.</h3>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {timeUnits.map((unit, index) => (
          <div key={index}>
            <h3 className="font-mono font-extrabold text-7xl w-28 text-center">
              {unit.value}
            </h3>
            <h5 className="text-center mt-2">{unit.label}</h5>
          </div>
        ))}
      </div>
      <Percentage startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default CountdownComponent;
