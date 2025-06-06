import { useState, useEffect } from 'react';

export default function MainBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // 이미지 프리로드
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/src/assets/images/main.jpg';
  }, []);

  return (
    <div className="max-w-[460px] w-full h-screen mx-auto">
      <div className="flex flex-col justify-center px-6 py-16">
        <h1
          className="text-6xl w-full break-all text-center transition-all duration-1000 ease-out whitespace-normal"
          style={{
            fontFamily: 'serif',
            filter: 'blur(0px)',
            transform: 'none',
          }}
        >
          <p className="text-center">
            <span className="text-gray-600">with love</span>
          </p>
        </h1>

        {/* 이미지 섹션 */}
        <div className="my-16 rounded-t-full aspect-[4/5] overflow-hidden w-full relative">
          {/* 파티클 효과 영역 */}
          <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* 투명 오버레이 */}
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>

          {/* 메인 이미지 */}
          <img
            alt="cover_image"
            className={`object-cover w-full h-full filter brightness-100 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src="/src/assets/images/main.jpg"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
            }}
            onLoad={() => setImageLoaded(true)}
          />

          {/* 로딩 상태 */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}
