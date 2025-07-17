import { Button } from "@/components/ui/button";
import { Phone, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { useCallback } from "react";

interface AccountCardProp {
  items: {
    name: string;
    bank: string;
    accountNumber: string;
    phoneNumber: string;
  };
  isLast?: boolean;
}

export function AccountCard({ items, isLast = false }: AccountCardProp) {
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
    <div className={`pt-3 ${!isLast && "pb-3 border-b-1 border-gray-200"}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1">
          <div className="mb-1">
            <span className="text-base font-medium text-gray-900">{name}</span>
          </div>
          <p
            className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
            onClick={handleCopy}
          >
            {bank} {accountNumber}
          </p>
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-3 h-9 text-xs text-gray-600 border-gray-300 bg-white/80 hover:bg-gray-50"
          onClick={handleCopy}
        >
          <Copy className="h-4 w-4 mr-1" />
          계좌 복사하기
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-9 text-xs text-gray-600 border-gray-300 bg-white/80 hover:bg-gray-50"
          onClick={handleCall}
        >
          <Phone className="h-4 w-4" />
          전화
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-9 text-xs text-gray-600 border-gray-300 bg-white/80 hover:bg-gray-50"
          onClick={handleSMS}
        >
          <Mail className="h-4 w-4" />
          문자
        </Button>
      </div>
    </div>
  );
}
