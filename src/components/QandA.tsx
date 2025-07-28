import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarFront, PlaneTakeoff, HandHeart } from "lucide-react";
import MotionDiv from "./MotionDiv";
import MainTitle from "./MainTitle";

const qnaData = [
  {
    id: "parking",
    icon: CarFront,
    question: "주차는 어떻게 하나요?",
    answer:
      "주차는 테크노마트 건물 지하에(B3~B8층) 가능하고, 주차할 자리는 비교적 넉넉하지만, 주말이라 혼잡할 수 있다고 합니다. \n총 3시간 주차 가능합니다. 식사하실때 잊지마시고 꼭 주차권 받아가세요.🚗",
  },
  {
    id: "honeymoon",
    icon: PlaneTakeoff,
    question: "신혼여행은 어디로 가나요?",
    answer:
      "유럽의 몰타, 시칠리아, 바르셀로나로 11박동안 다녀올 예정입니다. 생각보다 빡빡한 관광 일정이 될 것 같아, 신혼여행동안 다투지 않는것이 저희 부부의 첫번째 과제라고 생각합니다. 😆",
  },
  {
    id: "how-to-meet",
    icon: HandHeart,
    question: "두분은 어떻게 만나게 됐나요?",
    answer:
      "저희는 전 직장 동료였고, 퇴사 후에도 동료들과 어울리며 친하게 지내다가 어느 날은 단둘이서만 영화를 보게 되었고, 그 날부터 서서히 서로에게 마음이 싹텄습니다. 🌱",
  },
];

export default function QandA() {
  return (
    <div className="w-full mx-auto pb-16 px-4 xs400:px-6 ">
      <MotionDiv>
        <div className="text-center mb-6">
          <MainTitle title="INFO/Q&A" />
          <p className="text-sm">예비 신랑 신부에게 자주 물어보는 질문들을 정리해봤습니다!</p>
        </div>
      </MotionDiv>
      <MotionDiv>
        <Accordion type="single" collapsible className="space-y-3">
          {qnaData.map((item) => {
            const IconComponent = item.icon;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-none rounded-xl shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="flex items-center bg-white px-3 py-2 hover:no-underline transition-colors hover:bg-gray-100">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-7 h-7 border border-gray-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-500gray" />
                    </div>
                    <span className="text-sm font-medium  leading-tight">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 bg-white/30">
                  <div className="ml-9 text-sm text-800gray leading-relaxed whitespace-pre-wrap">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </MotionDiv>
    </div>
  );
}
