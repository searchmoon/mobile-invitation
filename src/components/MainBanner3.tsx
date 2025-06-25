import { useState } from "react";
import MotionDiv from "./MotionDiv";

export default function MainBanner3() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MotionDiv initial={{ y: 0 }}>
      <section className="relative w-full h-screen max-h-[900px] flex flex-col bg-theme-light transition-all duration-700">
        {/* 상단 이름 */}
        <header className="px-8 pt-12 pb-2 z-10">
          <div className="flex justify-between items-center">
            <h1
              className="text-2xl font-light text-gray-800 tracking-wide"
              style={{ fontFamily: "serif" }}
            >
              ChanHun
            </h1>
            <h1
              className="text-2xl font-light text-gray-800 tracking-wide"
              style={{ fontFamily: "serif" }}
            >
              JeongEun
            </h1>
          </div>
        </header>

        {/* 메인 이미지 */}
        <main className="flex-grow flex items-center justify-center px-8 min-h-0">
          <div className="relative h-full aspect-[2/3] overflow-hidden rounded-full">
            <img
              src="/images/main.jpg"
              alt="cover_image"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-1000 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
            {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
          </div>
        </main>

        {/* 하단 정보 */}
        <footer className="text-center pb-10 px-8 z-10">
          <div className="mb-4">
            <p className="text-sm font-light text-gray-600 tracking-[0.2em] mb-3 mt-4">
              WEDDING INVITATION
            </p>
            <div className="w-12 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div>
            <h2 className="block text-lg font-light text-gray-800 tracking-wide">
              October 25, 2025
            </h2>
            <span className="block text-sm text-gray-600 font-light">Saturday, 13:20 pm</span>
          </div>
        </footer>
      </section>
    </MotionDiv>
  );
}
