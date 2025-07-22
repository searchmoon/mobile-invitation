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
    <div className="flex justify-center items-center gap-3 py-8 font-comingSoon">
      {timeLeftArr.map((item) => (
        <div key={item.label} className="w-[67px] flex flex-col items-center group">
          <div
            className={`text-3xl mb-1 transition-all duration-300 group-hover:scale-110 ${item.label === "DAYS" ? "text-[#ad968b] font-medium" : "text-500gray font-light"}`}
          >
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="w-6 h-[2px] bg-gray-500/40 mb-2 rounded-full transition-all duration-300 group-hover:bg-gray-500" />
          <div className="text-xs text-600gray lowercase tracking-[1px]">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
