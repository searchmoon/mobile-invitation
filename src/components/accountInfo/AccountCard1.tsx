import { useCallback } from "react";
import { Copy, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "../ui/separator";

interface AccountCardProp {
  items: {
    name: string;
    bank: string;
    accountNumber: string;
    phoneNumber: string;
  };
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
    className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 bg-none transition-colors"
  >
    {icon}
    <span className="text-xs text-gray-600">{label}</span>
  </button>
);

export default function AccountCard({ items, isLast = false }: AccountCardProp) {
  const { name, bank, accountNumber, phoneNumber } = items;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(accountNumber).then(() =>
      toast("복사가 완료 되었습니다.", {
        description: `copy text: ${accountNumber}`,
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

  return (
    <div>
      <div className="flex justify-between items-center py-1">
        <div className="flex flex-col gap-[2px]">
          <p>{name}</p>
          <p className="flex gap-2 cursor-pointer" onClick={handleCopy}>
            {bank} {accountNumber}
          </p>
        </div>

        <div className="relative flex gap-1">
          <ActionButton
            icon={<Copy className="w-4 h-4 text-lightgray" />}
            label="계좌"
            onClick={handleCopy}
          />
          <ActionButton
            icon={<Phone className="w-4 h-4 text-lightgray" />}
            label="전화"
            onClick={handleCall}
          />
          <ActionButton
            icon={<Mail className="w-4 h-4 text-lightgray" />}
            label="문자"
            onClick={handleSMS}
          />
        </div>
      </div>
      {!isLast && <Separator />}
    </div>
  );
}
