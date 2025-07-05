import { Card } from "@/components/ui/card";

export default function DailyCalendar2() {
  return (
    <Card className="rounded-none w-64 aspect-[5/6] shadow-lg p-2 relative flex flex-col before:content-[''] before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-100 before:w-13 before:h-5 before:bg-gray-600/40 before:shadow-sm before:rounded-sm before:border before:border-gray-300/40">
      <img
        src="/assets/images/ring2.jpeg"
        alt="Daily calendar image"
        className="w-full h-full object-cover"
      />
    </Card>
  );
}

export function DailyCalendar3() {
  return (
    <Card className="rounded-none w-64 aspect-[5/6] shadow-lg p-2 relative flex flex-col before:content-[''] before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-100 before:w-13 before:h-5 before:bg-gray-600/40 before:shadow-sm before:rounded-sm before:border before:border-gray-300/40">
      <div className="flex-[2] bg-white flex flex-col items-center justify-center space-y-1 px-4 rounded-b-md">
        <p className="text-ms text-gray-600 font-semibold">10 月</p>
        <p className="text-7xl font-bold text-gray-900">25</p>
        <p className="text-xs text-gray-600 font-light uppercase">Saturday</p>
      </div>
    </Card>
  );
}
