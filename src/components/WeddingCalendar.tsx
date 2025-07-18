import { useState, useEffect, useMemo } from "react";
import { Heart } from "lucide-react";
import MotionDiv from "./MotionDiv";
import DailyCalendar from "./calendar/DailyCalendar";
import CountdownMinimal from "./CountdownMinimal";

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
          {/* 제목 */}
          <div className="mb-12 flex justify-center">
            <h1 className="text-3xl font-light font-serif tracking-wider text-gray opacity-90">
              WEDDING DAY
            </h1>
          </div>
        </MotionDiv>

        <MotionDiv>
          {/* 날짜 정보 */}
          <div className="flex flex-col text-center gap-y-2 mb-8 text-gray-900 opacity-90">
            <p className="text-lg">2025년 10월 25일 토요일 | 오후 1시 20분</p>
            <p className="font-medium text-[16px]">웨딩시티 신도림 8층 아모르홀</p>
          </div>
        </MotionDiv>
        <MotionDiv>
          <DailyCalendar />
        </MotionDiv>

        {/* <MonthCalendar /> */}

        <MotionDiv>
          <CountdownMinimal
            timeLeft={{
              days: timeLeft.days,
              hours: timeLeft.hours,
              minutes: timeLeft.minutes,
              seconds: timeLeft.seconds,
            }}
          />

          <div className="pt-8">
            <p className="flex items-baseline justify-center text-sm leading-snug text-gray-700">
              찬훈
              <Heart className="mx-2 w-3 h-3 fill-current" />
              정은 결혼식이
              <span className="mx-1 text-[#b19487] font-medium text-lg">{timeLeft.days}일</span>
              남았습니다
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
