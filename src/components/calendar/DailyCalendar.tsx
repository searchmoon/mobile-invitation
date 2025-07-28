export default function DailyCalendar() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-66 shadow-lg p-2 relative flex flex-col before:content-[''] before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:rotate-100 before:w-16 before:h-6 before:bg-gray-600/40 before:shadow-sm before:rounded-sm before:border before:border-gray-300/40 bg-white mb-2">
        <div className="w-full h-60 flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/gallery/JECH_27_ring.jpg"
            alt="Daily calendar image"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-4 pt-4 pb-3 text-700gray">
          <p className="text-3xl font-comingSoon mb-1">10/25</p>
          <p>토요일 오후 1시 20분</p>
          <p>웨딩시티 신도림 8층 아모르홀</p>
        </div>
      </div>
    </div>
  );
}
