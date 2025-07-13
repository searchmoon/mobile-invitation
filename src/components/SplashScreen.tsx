import { useLayoutEffect, useState } from "react";
import CircularText from "./CircularText";
import MotionDiv from "./MotionDiv";

interface SplashScreenProps {
  fadeOut?: boolean;
}

export default function SplashScreen({ fadeOut = false }: SplashScreenProps) {
  const [motion, setMotion] = useState(false);

  useLayoutEffect(() => {
    // 스크롤 막기
    document.body.style.overflow = "hidden";

    // motion 상태 설정 몇초 후 true로)
    const timer = setTimeout(() => {
      setMotion(true);
    }, 500);

    return () => {
      // 스크롤 복원 + 타이머 정리
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center z-50
        h-screen max-h-[900px]
        transition-opacity duration-1000
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
    >
      <div
        className="flex flex-col justify-center items-center w-full max-w-[460px] h-full"
        style={{
          // backgroundImage: "url('/assets/images/background/oreo-texture.jpg')",
          backgroundImage: "url('/assets/images/background/paper-texture.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <div className="flex items-center justify-between gap-1 mt-[115px]">
          <div
            className={`
              relative transition-all duration-[2000ms]
              ${motion ? "-top-1 -left-7 opacity-100" : "top-[23px] left-[18px] opacity-0"}
            `}
          >
            <div className="relative flex flex-col items-center mb-14">
              <CircularText radius={90} className="tracking-[10px]" startOffset="0%">
                CHAN HUN
              </CircularText>
              <div className="absolute -top-6 -left-6 flex justify-center items-center w-15 h-15">
                <img
                  src="/assets/images/boy.jpeg"
                  className="w-15 h-15 rounded-lg overflow-hidden shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <span
            className={`mx-3 text-gray-600 transition-all duration-3000 ${motion ? "opacity-100" : "opacity-0"}`}
          >
            &
          </span>

          <div
            className={`
              relative transition-all duration-2000
              ${motion ? "-bottom-1 -right-7 opacity-100" : "bottom-[23px] right-[18px] opacity-0"}
            `}
          >
            <div className="relative flex flex-col items-center mt-14">
              <div className="absolute -bottom-6 -right-6 flex justify-center items-center w-15 h-15">
                <img
                  src="/assets/images/girl.jpeg"
                  className="w-15 h-15 rounded-lg overflow-hidden shadow-2xl object-cover"
                />
              </div>
              <CircularText radius={90} className="tracking-[10px]" startOffset="45%">
                JEONG EUN
              </CircularText>
            </div>
          </div>
        </div>
        <MotionDiv initial={{ y: 0 }} transition={{ duration: 3 }}>
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-16 bg-black mt-30 mb-6"></div>
            <span>찬훈 & 정은</span>
            <span>결혼합니다</span>
            <div className="w-4 h-[1px] bg-black mt-3 mb-6"></div>
            <span>2025.10.25 토요일 13:20</span>
            <span>웨딩시티 신도림</span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
