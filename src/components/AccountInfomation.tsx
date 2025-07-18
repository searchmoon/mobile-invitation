import { Gift } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import MotionDiv from "./MotionDiv";
import { AccountCard } from "./accountInfo/AccountCard";

export interface InfoType {
  name: string;
  accountNumber: string;
  phoneNumber: string;
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
      <AccordionTrigger className="bg-white/80 border-none rounded-xl p-3 text-sm hover:bg-gray-100">
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
      name: "덩단훈",
      accountNumber: "국민 012220-1111-1111",
      phoneNumber: "010-1111-1111",
    },
    {
      name: "덩단훈 아버지",
      accountNumber: "토스뱅크 02210-2222-1111",
      phoneNumber: "010-2222-1111",
    },
    {
      name: "덩단훈 어머니",
      accountNumber: "국민 010222-3333-1111",
      phoneNumber: "010-3333-1111",
    },
  ];

  const brideInfo = [
    {
      name: "문덩흔",
      accountNumber: "토스뱅크 032132-4444-1111",
      phoneNumber: "010-4444-1111",
    },
    {
      name: "문덩흔 아버지 (문연기)",
      accountNumber: "우리 023123-5555-1111",
      phoneNumber: "010-5555-1111",
    },
    {
      name: "문덩흔 어머니 (신기루)",
      accountNumber: "신한 0123123-6666-1111",
      phoneNumber: "010-6666-1111",
    },
  ];

  const accountsGroup = [
    {
      id: "groom",
      title: "신랑측 계좌",
      iconColorClass: "text-blue-200",
      info: groomInfo,
    },
    {
      id: "bride",
      title: "신부측 계좌",
      iconColorClass: "text-red-200",
      info: brideInfo,
    },
  ];

  return (
    <div className="py-16 px-4 xs400:px-6">
      <MotionDiv>
        <div className="text-center space-y-2 my-6">
          <p className="mb-5">마음 전하실 곳</p>
          <p className="opacity-50 whitespace-pre-wrap">
            참석이 어려우신 분들을 위해 {"\n"} 계좌번호를 안내드립니다.
          </p>
          <p className="opacity-50 whitespace-pre-wrap">
            저희의 새시작을 축하해 주셔서 {"\n"} 마음 깊이 감사드립니다.
          </p>
        </div>
      </MotionDiv>
      <div className="mt-4 rounded-lg">
        <Accordion type="single" collapsible className="w-full">
          {accountsGroup.map((items) => (
            <AccountAccordion key={items.id} items={items} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
