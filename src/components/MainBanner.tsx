import { useState } from "react";
import MotionDiv from "./MotionDiv";

export default function MainBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const mainTitle = [
    { title: "with love" },
    {
      title: "Jengeun & Chanhun",
      subTitle: "10 / 25",
    },
  ];

  return (
    <MotionDiv initial={{ y: 0 }}>
      <div className="relative w-full h-screen max-h-[900px] flex flex-col justify-between bg-theme-light transition-all duration-700">
        {/* 상단 텍스트 */}
        <div className="px-4 xs400:px-6">
          <h1
            className="text-[48px] w-full break-all text-center text-lightgray transition-all duration-100 ease-out whitespace-normal border-b-1 border-t-1 border-gray-200 mt-[10vh] mb-[7vh]"
            style={{
              fontFamily: "serif",
            }}
          >
            {mainTitle[0].title}
          </h1>
        </div>

        {/* 이미지 섹션 */}
        <div className="h-full max-h-[640px] rounded-t-full mx-5 xs400:mx-6 overflow-hidden">
          {/* 파티클 효과 영역 */}
          {/* <div className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
            </div>
          </div> */}

          {/* 메인 이미지 */}
          <div className="h-full">
            <img
              alt="cover_image"
              className={`object-cover w-full h-full filter brightness-100 transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src="/images/main.jpg"
              onLoad={() => setImageLoaded(true)}
            />
            {/* 투명 오버레이 */}
            {/* <div className="absolute bottom-0 left-0 w-full h-full bg-transparent z-10"></div> */}

            {/* 로딩 상태 */}
            {!imageLoaded && (
              <div className="w-full h-full bg-gray-400/50 animate-pulse flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
