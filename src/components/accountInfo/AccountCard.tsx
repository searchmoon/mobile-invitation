import { Button } from "@/components/ui/button";
import { Phone, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { useCallback } from "react";
import type { InfoType } from "../AccountInfomation";

interface AccountCardProps {
  items: InfoType;
  isLast?: boolean;
}

const ActionButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
  >
    {icon}
    <span className="text-xs text-800gray">{label}</span>
  </button>
);

export function AccountCard({ items, isLast = false }: AccountCardProps) {
  const { name, accountNumber, phoneNumber } = items;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(accountNumber).then(() =>
      toast("계좌 복사가 완료 되었습니다.", {
        description: `${accountNumber}`,
        descriptionClassName: "text-sm !text-gray-500",
        duration: 1500,
      }),
    );
  }, [accountNumber]);

  const handleCall = useCallback(() => {
    window.location.href = `tel:${phoneNumber}`;
  }, [phoneNumber]);

  const handleSMS = useCallback(() => {
    window.location.href = `sms:${phoneNumber}`;
  }, [phoneNumber]);

  const divideNameArr = name.split(" ");

  return (
    <div className={`pt-3 ${!isLast && "pb-3 border-b-1 border-gray-200"}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex flex-col gap-[2px]">
          <div className="flex gap-[6px] items-center">
            <p className="font-light text-[14px]">{divideNameArr[0]}</p>
            <p className="font-semibold text-[15px]">{divideNameArr[1]}</p>
          </div>
          <p className="text-sm cursor-pointer transition-colors" onClick={handleCopy}>
            {accountNumber}
          </p>
        </div>
        {phoneNumber && (
          <div className={"flex"}>
            <ActionButton
              icon={<Phone className="w-4 h-4 text-600gray" />}
              label="전화"
              onClick={handleCall}
            />
            <ActionButton
              icon={<Mail className="w-4 h-4 text-600gray" />}
              label="문자"
              onClick={handleSMS}
            />
          </div>
        )}
      </div>
      <div>
        <Button
          variant="outline"
          className="w-full h-9 text-xs text-800gray border-gray-300 bg-white/80 hover:bg-gray-50"
          onClick={handleCopy}
        >
          <Copy className="mr-1 text-600gray" />
          계좌 복사하기
        </Button>
      </div>
    </div>
  );
}
