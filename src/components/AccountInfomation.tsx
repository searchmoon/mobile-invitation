import { Gift } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import MotionDiv from "./MotionDiv";
import { AccountCard } from "./accountInfo/AccountCard";
import MainTitle from "./MainTitle";

export interface InfoType {
  name: string;
  accountNumber: string;
  phoneNumber?: string;
}
interface ItemsProp {
  id: string;
  title: string;
  iconColorClass: string;
  info: InfoType[];
}

function AccountAccordion({ items }: { items: ItemsProp }) {
  const { id, title, iconColorClass, info } = items;
  return (
    <AccordionItem value={id} className="border-none rounded-xl shadow-sm mb-3 ">
      <AccordionTrigger className="flex justify-between bg-white/80 border-none rounded-xl p-3 text-sm hover:bg-gray-100">
        {/* 정렬하기 위해 넣어놓은 빈 p태그 */}
        <p></p>
        <div className="flex gap-2 my-auto">
          <Gift className={`w-5 h-5 ${iconColorClass}`} />
          <p>{title}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 bg-white/30">
        {info.map((item: InfoType, index: number) => (
          <AccountCard key={item.name} items={item} isLast={index === info.length - 1} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function AccountInfomation() {
  const groomInfo = [
    {
      name: "신랑 성찬훈",
      accountNumber: "국민 1111111111111111",
      phoneNumber: "010-6315-7035",
    },
    {
      name: "아버지 성홍모",
      accountNumber: "토스뱅크 02210-2222-1111",
      phoneNumber: "010-2222-1111",
    },
    {
      name: "어머니 지현진",
      accountNumber: "국민 010222-3333-1111",
      phoneNumber: "010-3333-1111",
    },
  ];

  const brideInfo = [
    {
      name: "신부 문정은",
      accountNumber: "토스뱅크 1000-1450-0908",
      phoneNumber: "010-3589-3752",
    },
    {
      name: "아버지 문영기",
      accountNumber: "국민은행 366-21-0016-741",
      phoneNumber: "010-3767-3742",
    },
    {
      name: "어머니 신길옥",
      accountNumber: "농협 108-02-194568",
      phoneNumber: "010-4344-3742",
    },
  ];

  const accountsGroup = [
    {
      id: "groom",
      title: "신랑측",
      iconColorClass: "text-blue-200",
      info: groomInfo,
    },
    {
      id: "bride",
      title: "신부측",
      iconColorClass: "text-red-200",
      info: brideInfo,
    },
  ];

  return (
    <div className="pb-16 px-4 xs400:px-6">
      <MotionDiv>
        <div className="text-center space-y-2 mb-12">
          <MainTitle title="ACCOUNT" />
          <p>직접 참석이 어려우신 분들을 위해</p>
          <p>계좌번호를 함께 안내드립니다.</p>
          <p>저희의 새로운 시작을 축하해 주셔서</p>
          <p>진심으로 감사드립니다.</p>
        </div>
      </MotionDiv>
      <MotionDiv>
        <div className="flex flex-col items-center mt-4">
          <Accordion type="single" collapsible className="w-full max-w-80 ">
            {accountsGroup.map((items) => (
              <AccountAccordion key={items.id} items={items} />
            ))}
          </Accordion>
        </div>
      </MotionDiv>
    </div>
  );
}
