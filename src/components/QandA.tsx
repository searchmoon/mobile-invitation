import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, MapPin, Gift, Users, Calendar } from "lucide-react";
import MotionDiv from "./MotionDiv";

const qnaData = [
  {
    id: "honeymoon",
    icon: MapPin,
    question: "신혼여행은 어디로 가나요?",
    answer: "유럽의 몰타, 스페인을 중심으로 12박정도 다녀올 예정입니다.",
  },
  {
    id: "how-to-meet",
    icon: Heart,
    question: "두분은 어떻게 만나게 됐나요?",
    answer:
      "저희는 전 직장 동료였고, 퇴사 후, 몇몇 동료들과 친하게 지내다가 둘 중 한명이(누군지는 비-밀) 먼저 영화를 보자고 했고, 둘이서 세번째 만나는 날부터 사귀게 되었습니다.",
  },
  {
    id: "wedding-date",
    icon: Calendar,
    question: "만난지 얼마나 됐나요?",
    answer: "저희는 23년 7월부터 지금까지 2년 조금 넘게 만났습니다.",
  },
  {
    id: "proposal",
    icon: Heart,
    question: "프러포즈는 어떻게 했나요?",
    answer: "💍",
  },
  {
    id: "parking",
    icon: Users,
    question: "주차는 넉넉한가요?",
    answer: "주차는 넉넉하고, 3시간 주차 가능합니다. 식사하실때 잊지마시고 꼭 주차권 받아가세요.",
  },
  {
    id: "gift",
    icon: Gift,
    question: "드리고 싶은말",
    answer:
      "저희의 결혼을 축하해주셔서 진심으로 감사드립니다. 지금처럼 서로 아끼고 사랑하면서 평생 행복하게 잘 살겠습니다. 🌸",
  },
];

export default function QandA() {
  return (
    <div className="w-full mx-auto py-16 px-4 xs400:px-6 ">
      <MotionDiv>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Q&A</h2>
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
                className="border-none rounded-xl shadow-sm bg-white overflow-hidden"
              >
                <AccordionTrigger className="flex items-center px-3 py-2 hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 leading-tight">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="ml-11 text-sm text-gray-600 leading-relaxed">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </MotionDiv>
    </div>
  );
}
