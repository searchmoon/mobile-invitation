export default function CountCard({ countNum, title }: { countNum: number; title: string }) {
  return (
    <div className="py-4 rounded-lg shadow-lg bg-[#ffffff96]">
      <div className="flex flex-col items-center font-extralight gap-y-2">
        <div className="text-2xl text-gray-900">{countNum}</div>
        <div className="text-gray-400 text-xs">{title}</div>
      </div>
    </div>
  );
}

export function CountCard2({ countNum, title }: { countNum: number; title: string }) {
  return (
    <div className="flex items-end font-extralight">
      <div className="text-2xl mr-1 text-gray-900">{countNum}</div>
      <div className="text-gray-400 text-xs lowercase">{title}</div>
    </div>
  );
}

export function CountCard3({ countNum, title }: { countNum: number; title: string }) {
  return (
    <div className="py-2 rounded-lg bg-amber-400">
      <div className="flex items-end font-extralight">
        <div className="text-2xl mr-1 text-gray-900">{countNum}</div>
        <div className="text-gray-400 text-xs lowercase">{title}</div>
      </div>
    </div>
  );
}
