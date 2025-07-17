import { useEffect, useState } from "react";
import Preview from "./pages/Preview";
import SplashScreen from "./components/SplashScreen";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1.5초 후 페이드아웃 시작
    const timer1 = setTimeout(() => setFadeOut(true), 3000);
    // 3초 후 SplashScreen 제거
    const timer2 = setTimeout(() => setShowSplash(false), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div
        className="bg-repeat-y bg-top min-h-screen"
        style={{
          backgroundImage: "url('/assets/images/background/paper-texture.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <Preview />
        <Toaster position="bottom-center" closeButton swipeDirections={["right", "bottom"]} />
        {showSplash && <SplashScreen fadeOut={fadeOut} />}
      </div>
    </div>
  );
}

export default App;
