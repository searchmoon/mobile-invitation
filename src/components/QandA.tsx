import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, CarFront, PlaneTakeoff, HandHeart, Milestone } from "lucide-react";
import MotionDiv from "./MotionDiv";

const qnaData = [
  {
    id: "way",
    icon: Milestone,
    question: "오는 길 자세한 안내(지하철 내 출구 기준)",
    answer: "신도림역에서 하차 후, 3,4번 출구로 나가는 방향으로 쭈욱 따라갑니다. ",
  },
  {
    id: "parking",
    icon: CarFront,
    question: "주차는 어디다가 하나요?",
    answer:
      "주차는 지하 B3-8층까지 가능하시고, 3시간 주차 가능합니다. 식사하실때 잊지마시고 꼭 주차권 받아가세요.",
  },
  {
    id: "honeymoon",
    icon: PlaneTakeoff,
    question: "신혼여행은 어디로 가나요?",
    answer: "유럽의 몰타, 스페인을 중심으로 11박동안 다녀올 예정입니다.",
  },
  {
    id: "how-to-meet",
    icon: HandHeart,
    question: "두분은 어떻게 만나게 됐나요?",
    answer:
      "저희는 전 직장 동료였고, 퇴사 후, 몇몇 동료들과 친하게 지내다가 둘 중 한명이(누군지는 비-밀) 먼저 영화를 보자고 했고, 둘이서 세번째 만나는 날부터 사귀게 되었습니다.",
  },
  {
    id: "wedding-date",
    icon: Calendar,
    question: "만난지 얼마나 됐나요?",
    answer:
      "저희는 23년 7월부터 지금까지 2년 조금 넘게 만났습니다. 결혼은 만난지 1년 5개월쯤 되었을때에 약속했어요.💍",
  },
];

export default function QandA() {
  return (
    <div className="w-full mx-auto py-16 px-4 xs400:px-6 ">
      <MotionDiv>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">안내사항 및 Q&A</h2>
          <p className="text-sm text-gray-600">
            결혼하는 신랑 신부에게 물어볼법 한(?) 질문들을 정리해봤습니다!
          </p>
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
                      <IconComponent className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 leading-tight">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 bg-white/30">
                  <div className="ml-9 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </MotionDiv>
    </div>
  );
}
