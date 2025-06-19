import { useRef } from "react";
import { Separator } from "../ui/separator";
import { Copy } from "lucide-react";

interface PersonalAccountProp {
  items: {
    name: string;
    bank: string;
    accountNumber: string;
  };
  isLast?: boolean;
}

export default function PersonalAccount({ items, isLast = false }: PersonalAccountProp) {
  const { name, bank, accountNumber } = items;
  const isPointerDown = useRef(false);

  const handlePointerDown = () => {
    isPointerDown.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (isPointerDown.current) {
      // 실제 동작 (예: 복사)
      const text = e.currentTarget.innerText;
      navigator.clipboard.writeText(text).then(() => alert("복사 되었습니다."));
    }
    isPointerDown.current = false;
  };

  const handlePointerLeave = () => {
    // pointer up 될때, 밖으로 나가면 취소
    isPointerDown.current = false;
  };

  return (
    <>
      <div className="space-y-1">
        <p>{name}</p>
        <div className="flex gap-1">
          <p>{bank}</p>
          <p
            className="flex gap-2 items-center"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
          >
            {accountNumber}
            <Copy className="w-4 h-4 text-lightgray" />
          </p>
        </div>
      </div>
      {!isLast && <Separator className="my-2" />}
    </>
  );
}
