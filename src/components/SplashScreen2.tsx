import CircularText from "./CircularText";

interface SplashScreenProps {
  fadeOut?: boolean;
}

export default function SplashScreen2({ fadeOut = false }: SplashScreenProps) {
  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center z-50
        h-screen max-h-[960px]
        transition-opacity duration-1000
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
    >
      <div
        className="flex flex-col justify-center items-center w-full max-w-[460px] h-full bg-gray-100"
        style={{
          backgroundImage: "url('/assets/images/background/paper-texture2.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <CircularText className="tracking-[8px] ">We're getting married</CircularText>
        <div className="flex items-center">
          <div className="flex flex-col items-center p-[2px]">
            <img src="/assets/images/girl.jpeg" className="w-12 h-12 rounded-sm overflow-hidden" />
            <p>JEONG EUN</p>
          </div>
          <span>&</span>
          <div className="flex flex-col items-center">
            <img src="/assets/images/girl.jpeg" className="w-12 h-12 rounded-sm overflow-hidden" />
            <p>CHAN HUN</p>
          </div>
        </div>
        <div className="w-[1px] h-20 bg-black mt-6"></div>
        <span>2025.10.25 토요일 13:20</span>
        <span>웨딩시티 신도림</span>
      </div>
    </div>
  );
}
