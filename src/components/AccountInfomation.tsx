import { Flower2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import PersonalAccount from "./accountInfo/PersonalAccount";
import MotionDiv from "./MotionDiv";

export default function AccountInfomation() {
  const groomAccount = [
    {
      name: "덩단훈",
      bank: "국민은행",
      accountNumber: "010-1111-1111",
    },
    {
      name: "덩단훈 아버지",
      bank: "국민은행",
      accountNumber: "010-2222-1111",
    },
    {
      name: "덩단훈 어머니",
      bank: "국민은행",
      accountNumber: "010-3333-1111",
    },
  ];
  const brideAccount = [
    {
      name: "문덩흔",
      bank: "국민은행",
      accountNumber: "010-4444-1111",
    },
    {
      name: "문덩흔 아버지 (문연기)",
      bank: "국민은행",
      accountNumber: "010-5555-1111",
    },
    {
      name: "문덩흔 어머니 (신기루)",
      bank: "국민은행",
      accountNumber: "010-6666-1111",
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
          <MotionDiv>
            <AccordionItem value="groom" className="border-none rounded-lg shadow-md bg-theme mb-3">
              <AccordionTrigger className="bg-white border-none rounded-lg p-4 text-sm">
                <div className="flex gap-1 my-auto">
                  <Flower2 className="text-blue-200 w-5 h-5" />
                  <p>신랑측</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-5">
                {groomAccount.map((item, index) => (
                  <PersonalAccount
                    key={item.accountNumber}
                    items={item}
                    isLast={index === groomAccount.length - 1}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </MotionDiv>
          <MotionDiv>
            <AccordionItem value="bride" className="border-none rounded-lg shadow-md bg-theme mb-3">
              <AccordionTrigger className="bg-white border-none rounded-lg p-4 text-sm">
                <div className="flex gap-1 my-auto">
                  <Flower2 className="text-red-200 w-5 h-5" />
                  <p>신부측</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-5">
                {brideAccount.map((item, index) => (
                  <PersonalAccount
                    key={item.accountNumber}
                    items={item}
                    isLast={index === brideAccount.length - 1}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </MotionDiv>
        </Accordion>
      </div>
    </div>
  );
}
