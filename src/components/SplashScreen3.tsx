import CircularText from "./CircularText";

interface SplashScreenProps {
  fadeOut?: boolean;
}

export default function SplashScreen({ fadeOut = false }: SplashScreenProps) {
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
        className="flex flex-col justify-center items-center w-full max-w-[460px] h-full bg-gray-100"
        style={{
          backgroundImage: "url('/assets/images/background/paper-texture2.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        {/* <CircularText className="tracking-[8px] ">We're getting married</CircularText> */}
        <div className="flex flex-col justify-beteen gap-2 mt-[115px]">
          <div className="relative flex flex-col items-center mb-12">
            <CircularText radius={100} className="tracking-[8px]" startOffset="0%">
              JEONG EUN
            </CircularText>
            <div className="absolute -top-4 -left-4 flex justify-center items-center w-14 h-14 border-1 border-gray-500 rounded-lg">
              <img
                src="/assets/images/girl.jpeg"
                className="w-12 h-12 rounded-sm overflow-hidden"
              />
            </div>
          </div>
          <span className="mx-3 text-gray-600">&</span>
          <div className="relative flex flex-col items-center mt-12">
            <div className="absolute -bottom-4 -right-4  flex justify-center items-center w-14 h-14 border-1 border-gray-500 rounded-lg">
              <img
                src="/assets/images/girl.jpeg"
                className="w-12 h-12 rounded-sm overflow-hidden"
              />
            </div>
            <CircularText radius={100} className="tracking-[8px]" startOffset="50%">
              CHAN HUN
            </CircularText>
          </div>
        </div>
        <div className="w-[1px] h-16 bg-black mt-20 mb-10"></div>
        <span>2025.10.25 토요일 13:20</span>
        <span>웨딩시티 신도림</span>
      </div>
    </div>
  );
}
