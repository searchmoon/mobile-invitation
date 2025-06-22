function CountCard({ countNum, title }: { countNum: number; title: string }) {
  return (
    <div className="py-4 rounded-lg shadow-lg bg-[#ffffff96]">
      <div className="flex flex-col items-center font-extralight gap-y-2">
        <div className="text-2xl text-gray-900">{countNum}</div>
        <div className="text-gray-400 text-xs">{title}</div>
      </div>
    </div>
  );
}

export default CountCard;
