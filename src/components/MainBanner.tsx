import { useState, useEffect } from "react";
import MotionDiv from "./MotionDiv";

export default function MainBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // 이미지 프리로드
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/images/main.jpg";
  }, []);

  const mainTitle = [
    { title: "with love" },
    {
      title: "Jengeun & Chanhun",
      subTitle: "10 / 25",
    },
  ];

  return (
    <MotionDiv initial={{ y: 0 }}>
      <div className={"relative w-full h-screen max-h-[900px] flex flex-col bg-theme-light"}>
        <div className="w-full flex-1 flex flex-col">
          <div className="px-4 xs400:px-6">
            <h1
              className="text-[56px] w-full break-all text-center text-lightgray transition-all duration-100 ease-out whitespace-normal border-b-1 border-t-1 border-gray-200 mt-[8vh] mb-[4vh]"
              style={{
                fontFamily: "serif",
              }}
            >
              {mainTitle[0].title}
            </h1>
          </div>
          {/* 이미지 섹션 */}
          <div className="relative h-full w-full overflow-hidden mt-3 xs400:mt-1">
            {/* 파티클 효과 영역 */}
            <div className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* 투명 오버레이 */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-transparent z-10"></div>

            {/* 메인 이미지 */}

            <div className="absolute bottom-0 left-0 right-0 rounded-t-full h-full mx-5 xs400:mx-6 overflow-hidden">
              <img
                alt="cover_image"
                className={`object-cover w-full h-full filter brightness-100 transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                src="/images/main.jpg"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* 로딩 상태 */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-full mx-5 xs400:mx-6"></div>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
