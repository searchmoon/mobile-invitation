import { useState, useEffect, useMemo } from "react";
// import { Calendar } from "@/components/ui/calendar";
// import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
// import { ko } from "date-fns/locale";
import { CountCard2 } from "./calendar/CountCard";
import MotionDiv from "./MotionDiv";
import DailyCalendar from "./calendar/DailyCalendar";
// import DailyCalendar2, { DailyCalendar3 } from "./calendar/DailyCalendar2";
// import MonthCalendar from "./calendar/MonthCalendar";
// import CountdownMinimal from "./CountdownMinimal";
// import CountdownTypography from "./CountDownTypography";

export default function WeddingCalendar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 결혼식 날짜 설정 (2025년 10월 25일 13:20 - 한국 시간)
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
            <h1 className="text-4xl font-light font-serif tracking-wider text-gray opacity-90">
              WEDDING DAY
            </h1>
          </div>
        </MotionDiv>

        <MotionDiv>
          {/* 날짜 정보 */}
          <div className="flex flex-col text-center gap-y-2 mb-8 text-gray-900 opacity-90">
            <p className="text-lg">2025년 10월 25일 토요일 | 오후 1시 20분</p>
            <p className="font-light text-sm opacity-50">Saturday, October 25, 2025 | PM 1:20</p>
          </div>
        </MotionDiv>
        <MotionDiv>
          <DailyCalendar />
        </MotionDiv>

        {/* <MotionDiv>
          <div className="flex space-x-4 px-4 py-8">
            <DailyCalendar2 />
            <DailyCalendar3 />
          </div>
        </MotionDiv> */}

        {/* <MonthCalendar /> */}

        <MotionDiv>
          {/* 구분선 */}
          {/* <Separator className="my-8 bg-black opacity-10" /> */}

          {/* 카운트다운 */}
          {/* <div className="grid grid-cols-4 justify-center w-full gap-x-2 mb-8">
            <CountCard countNum={timeLeft.days} title="DAYS" />
            <CountCard countNum={timeLeft.hours} title="HOURS" />
            <CountCard countNum={timeLeft.minutes} title="MINUTES" />
            <CountCard countNum={timeLeft.seconds} title="SECONDS" />
          </div> */}
          <div className="flex justify-center w-full gap-x-4 mt-4 mb-8">
            <CountCard2 countNum={timeLeft.days} title="DAYS" />
            <CountCard2 countNum={timeLeft.hours} title="HOURS" />
            <CountCard2 countNum={timeLeft.minutes} title="MINUTES" />
            <CountCard2 countNum={timeLeft.seconds} title="SECONDS" />
          </div>
          {/* <CountdownMinimal */}
          {/* <CountdownMinimal
            timeLeft={{
              days: timeLeft.days,
              hours: timeLeft.hours,
              minutes: timeLeft.minutes,
              seconds: timeLeft.seconds,
            }}
          /> */}

          {/* 하단 메시지 */}
          <div className="pt-8">
            <p className="flex items-baseline justify-center text-sm leading-snug text-gray-700">
              정순
              <Heart className="mx-2 w-3 h-3 fill-current" />
              찬돌 결혼식이
              <span className="mx-1 text-gray-500 font-medium text-lg">{timeLeft.days}일</span>
              남았습니다
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
