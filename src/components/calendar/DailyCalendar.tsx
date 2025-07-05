export default function DailyCalendar() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-60 shadow-xl p-2 relative flex flex-col before:content-[''] before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-100 before:w-16 before:h-6 before:bg-gray-600/40 before:shadow-sm before:rounded-sm before:border before:border-gray-300/40 bg-white">
        <div className="w-full h-60 flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/ring2.jpeg"
            alt="Daily calendar image"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-4 py-2 text-gray-800">
          <p className="text-ms font-semibold">10 月</p>
          <p className="text-6xl font-bold mb-2">25</p>
          <p className="text-xs font-light uppercase">Saturday</p>
        </div>
      </div>
    </div>
  );
}
