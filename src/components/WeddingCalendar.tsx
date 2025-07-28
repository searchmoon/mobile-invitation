import { useState, useEffect, useMemo } from "react";
import { Heart } from "lucide-react";
import MotionDiv from "./MotionDiv";
import DailyCalendar from "./calendar/DailyCalendar";
import CountdownMinimal from "./CountdownMinimal";
import MainTitle from "./MainTitle";

export default function WeddingCalendar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = useMemo(() => new Date("2025-10-25T13:20:00+09:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = weddingDate.getTime() - now.getTime();

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="flex flex-col items-center justify-center py-18 px-4 xs400:px-6">
      <div className="w-full">
        <MotionDiv>
          <MainTitle title="WEDDING DAY" />
        </MotionDiv>
        <MotionDiv>
          <DailyCalendar />
        </MotionDiv>

        <MotionDiv>
          <CountdownMinimal
            timeLeft={{
              days: timeLeft.days,
              hours: timeLeft.hours,
              minutes: timeLeft.minutes,
              seconds: timeLeft.seconds,
            }}
          />
        </MotionDiv>
        <MotionDiv>
          <div className="pt-4">
            <p className="flex items-center justify-center text-ms leading-snug">
              찬훈
              <Heart className="mx-1 fill-[#ad968b]" color="#fff" />
              정은 결혼식이
              <span className="mx-1 text-[#ad968b] font-gamja font-medium text-[26px]">
                {timeLeft.days}
              </span>
              일 남았습니다
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
