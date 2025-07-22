interface CountdownTypographyProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function CountdownTypography({ timeLeft }: CountdownTypographyProps) {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center items-baseline gap-2 md:gap-4 mb-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-extralight text-800gray">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-500gray mt-1">DAYS</span>
        </div>
        <span className="text-2xl text-400gray mb-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-extralight text-800gray">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-500gray mt-1">HOURS</span>
        </div>
        <span className="text-2xl text-400gray mb-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-extralight text-800gray">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-500gray mt-1">MIN</span>
        </div>
        <span className="text-2xl text-400gray mb-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-extralight text-rose-500">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-500gray mt-1">SEC</span>
        </div>
      </div>
    </div>
  );
}
