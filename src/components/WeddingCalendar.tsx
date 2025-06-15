import { useState, useEffect, useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { ko } from "date-fns/locale";
import CountCard from "./calendar/CountCard";
import MotionDiv from "./MotionDiv";

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
    <div className="flex flex-col items-center justify-center py-18 px-4 xs400:px-6 bg-theme-light">
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
          {/* 구분선 */}
          <Separator className="my-8 bg-black opacity-10" />
          <div className="w-full mb-8">
            <Calendar
              mode="single"
              selected={weddingDate}
              locale={ko}
              className="w-full"
              classNames={{
                months: "flex flex-col space-y-4",
                caption_label: "hidden", // 달 숨기기
                nav: "hidden", // 달 넘기기 버튼 숨기기
                table: "w-full border-collapse",
                head_row: "grid grid-cols-7 gap-y-6 mb-1 xs400:mb-2 max-mb-4",
                head_cell:
                  "text-center font-normal text-sm text-gray-700 [&:first-child]:text-red-400 [&:last-child]:text-red-400",
                row: "grid grid-cols-7 my-4",
                cell: "text-center p-0 relative flex justify-center items-center",
                day: "h-8 w-8 p-0 font-extralight text-sm aria-selected:opacity-100 text-gray-700 [&[data-today]]:bg-transparent [&[data-today]]:text-gray-700",
                day_selected: "bg-rose-300 text-white rounded-full",
                day_today: "bg-gray-200 rounded-full font-extralight",
                day_outside: "text-transparent opacity-0",
                day_disabled: "text-gray-400 opacity-50",
                day_range_middle: "aria-selected:bg-transparent aria-selected:text-gray-700",
                day_hidden: "invisible",
              }}
              modifiers={{
                sunday: (date) => date.getDay() === 0,
                saturday: (date) => date.getDay() === 6,
              }}
              modifiersClassNames={{
                sunday: "text-red-400 [&:not([aria-selected])]:text-rose-400",
                saturday: "text-red-400 [&:not([aria-selected])]:text-rose-400",
              }}
              defaultMonth={weddingDate}
              showOutsideDays={false}
            />
          </div>
        </MotionDiv>

        <MotionDiv>
          {/* 구분선 */}
          <Separator className="my-8 bg-black opacity-10" />

          {/* 카운트다운 */}
          <div className="grid grid-cols-4 justify-center w-full gap-x-2 mb-8">
            <CountCard countNum={timeLeft.days} title="DAYS" />
            <CountCard countNum={timeLeft.hours} title="HOURS" />
            <CountCard countNum={timeLeft.minutes} title="MINUTES" />
            <CountCard countNum={timeLeft.seconds} title="SECONDS" />
          </div>

          {/* 하단 메시지 */}
          <div className="pt-8">
            <p className="flex items-center justify-center text-sm leading-snug text-gray-700">
              정순
              <Heart className="mx-2 w-3 h-3 fill-current" />
              찬돌 결혼식이{" "}
              <span className="mx-1 text-rose-500 font-medium text-lg">{timeLeft.days}일</span>
              남았습니다
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
