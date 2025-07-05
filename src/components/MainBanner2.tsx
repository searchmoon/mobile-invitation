import { useState } from "react";
import MotionDiv from "./MotionDiv";

export default function MainBanner2() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MotionDiv initial={{ y: 0 }}>
      <div className="relative w-full h-screen max-h-[900px] flex flex-col transition-all duration-500">
        {/* 메인 이미지 */}
        <div className="h-full w-full overflow-hidden">
          <img
            src="/assets/images/main2.jpg"
            alt="cover_image"
            onLoad={() => setImageLoaded(true)} // 이미지가 완전히 load 된 후 실행됨
            className={`object-cover w-full h-full transition-all duration-1000 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-120"
            }`}
          />

          {/* 전체 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/30">
            <div className="absolute inset-[10px] border border-white/50 border-opacity-10"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
            {/* 상단 텍스트 */}
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-[6px] border border-white/20 z-10">
              <p className="text-white text-xs font-light tracking-[0.25em]">SAVE THE DATE</p>
            </div>

            {/* 중앙 텍스트 */}
            <div className="text-center text-white z-10 mb-[40vh]">
              <h1
                className="text-4xl mb-2 font-light tracking-wide"
                style={{ fontFamily: "serif" }}
              >
                Sung & Moon
              </h1>
              <div className="w-16 h-px bg-white/60 mx-auto mb-3"></div>
              <p className="text-sm font-light tracking-[0.2em] opacity-90">getting married</p>
            </div>

            {/* 하단 텍스트 */}
            <div className="text-center text-white">
              <h2 className="texts-2xl mb-2 font-light tracking-wide">ChanHun & JeongEun</h2>
              <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
                <span>October 25</span>
                <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                <span>2025</span>
                <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                <span>Saturday</span>
              </div>
            </div>
          </div>
        </div>

        {/* 로딩 상태 */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </MotionDiv>
  );
}
