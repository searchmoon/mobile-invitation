import { useRef } from "react";
import { Separator } from "../ui/separator";
import { Copy } from "lucide-react";
import { toast } from "sonner";

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
      const text = e.currentTarget.innerText;
      navigator.clipboard.writeText(text).then(() =>
        toast("복사가 완료 되었습니다.", {
          description: `copy text: ${text}`,
          duration: 1500,
        }),
      );
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
