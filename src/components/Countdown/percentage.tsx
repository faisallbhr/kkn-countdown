const Percentage = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  const now = new Date();
  const totalTime = +endDate - +startDate;
  const elapsedTime = +now - +startDate;
  const percentage = ((elapsedTime / totalTime) * 100).toFixed(2);
  return (
    <div className="max-w-sm mx-auto w-full space-y-2">
      <div className="relative h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 bg-transparent h-2"
          style={{ width: `${percentage}%` }}></div>
        <div
          className="absolute right-0 top-0 bg-white h-2"
          style={{ width: `calc(100% - ${percentage}%)` }}></div>
      </div>
      <h5 className="text-center">{percentage}%</h5>
    </div>
  );
};

export default Percentage;
