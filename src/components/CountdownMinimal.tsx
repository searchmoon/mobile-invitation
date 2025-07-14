interface CountdownMinimalProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function CountdownMinimal({ timeLeft }: CountdownMinimalProps) {
  const timeLeftArr = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex justify-center items-center gap-3 py-8">
      {timeLeftArr.map((item) => (
        <div key={item.label} className="w-[67px] flex flex-col items-center group">
          <div className="text-3xl font-light text-gray-800 mb-2 transition-all duration-300 group-hover:scale-110">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="w-6 h-0.5 bg-gray-300 mb-2 transition-all duration-300 group-hover:bg-gray-500" />
          <div className="text-xs text-gray-500 lowercase tracking-[1px]">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
