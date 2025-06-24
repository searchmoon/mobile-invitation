import { useRef, useEffect, useState } from "react";

const MIN_PADDING = 0; // 최소 padding-bottom (%)
const MAX_PADDING = 56; // 동영상 비율 16:9 → 약 56.25%
const START_OFFSET = 30; // 동영상 상단이 30px 들어온 뒤부터 애니메이션 시작

const ScrollAnimatedVideo = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [aspectRatioPadding, setAspectRatioPadding] = useState(MIN_PADDING);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 동영상 상단이 화면에 들어온 뒤 100px 더 내려가야 애니메이션 시작
      const startPoint = windowHeight - START_OFFSET;
      const endPoint = windowHeight * 0.5; // 50vh

      // 애니메이션 구간: rect.top이 startPoint에서 endPoint로 이동하는 구간
      const progress = 1 - (rect.top - endPoint) / (startPoint - endPoint); // 0~1 사이 값

      // 동영상이 50vh 이상 내려가면 다시 줄어듦
      // progress가 1.2를 넘으면 2.4-progress로 반전
      let animatedProgress = progress;

      if (progress > 1.2) {
        animatedProgress = 2.4 - progress; // 반전되기 시작
      } else if (progress > 1) {
        animatedProgress = 1; // 머무는 구간
      }
      // 0~1 범위로 클램프
      animatedProgress = Math.max(0, Math.min(1, animatedProgress));

      const newPadding = MIN_PADDING + (MAX_PADDING - MIN_PADDING) * animatedProgress;

      setAspectRatioPadding(newPadding);
    };

    window.addEventListener("scroll", handleScroll);
    // 최초 렌더링 시에도 실행
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: `${aspectRatioPadding}%`,
        overflow: "hidden",
        transition: "padding-bottom cubic-bezier(0.4,0,0.2,1)",
      }} // tailwind 의 스타일로 바꿔주었는데, 버벅대는게 있어서 그냥 style로 둠
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/video/wedding-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 pointer-events-none">
        <p className="text-white text-6xl font-serif">10/25</p>
        <span className="text-white text-2xl font-serif">13:20pm</span>
      </div>
    </div>
  );
};

export default ScrollAnimatedVideo;
