import { useMemo } from "react";
import { Calendar } from "../ui/calendar";
import { ko } from "date-fns/locale";

export default function MonthCalendar() {
  const weddingDate = useMemo(() => new Date("2025-10-25T13:20:00+09:00"), []);

  return (
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
  );
}
