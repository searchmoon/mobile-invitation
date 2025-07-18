import { Share, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function Footer() {
  const deploymentLink = "https://mobile-invitation-zeta.vercel.app";

  const handleCopy = () => {
    // const link = window.location.href;
    // const deploymentLink = "https://mobile-invitation-zeta.vercel.app";

    navigator.clipboard.writeText(deploymentLink).then(() =>
      toast("복사가 완료 되었습니다.", {
        description: `${deploymentLink}`,
        descriptionClassName: "text-sm !text-gray-700 ",
        duration: 1500,
      }),
    );
  };

  // useEffect(() => {
  //   console.log("VITE_KAKAO_API_KEY:", import.meta.env.VITE_KAKAO_API_KEY);
  //   // SDK 초기화 (중복 초기화 방지)
  //   if (window.Kakao && !window.Kakao.isInitialized()) {
  //     window.Kakao.cleanup(); // 기존 초기화 정리
  //     const appKey = import.meta.env.VITE_KAKAO_API_KEY;
  //     window.Kakao.init(appKey); // 발급받은 JavaScript 키 입력
  //     console.log("초기화 완료");
  //   }

  //   console.log("카카오 SDK 초기화 완료:", window.Kakao.isInitialized());
  // }, []);

  const handleShareKakao = () => {
    const locationName = "웨딩시티 신도림";

    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "성찬훈 ♥️ 문정은 결혼합니다",
          description: "10월 25일 오후 13:20분 웨딩시티 신도림 8층 아모르홀",
          imageUrl: `${deploymentLink}/assets/JECH_42-7GtNyFpY.jpg`,
          link: {
            mobileWebUrl: deploymentLink,
            webUrl: deploymentLink,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: deploymentLink,
              webUrl: deploymentLink,
            },
          },
          {
            title: "위치 보기",
            link: {
              mobileWebUrl: `https://map.kakao.com/link/search/${encodeURIComponent(locationName)}`,
              webUrl: `https://map.kakao.com/link/search/${encodeURIComponent(locationName)}`,
            },
          },
        ],
        social: { likeCount: 120, commentCount: 5, sharedCount: 20 },
      });
    }
  };

  const strongShadow = {
    textShadow: "1px 1px 9px rgba(0,0,0,0.3)",
    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.1))",
  };

  return (
    <div>
      <div className="relative">
        <div className="relative">
          <img
            src="/assets/images/gallery/cut_JECH_35.jpg"
            className="w-full h-auto object-cover"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,1) 100%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40"></div>
        </div>
        <div className="absolute top-0 right-0 left-0 flex flex-col gap-[2px] justify-center items-center pt-6 px-4 pointer-events-none">
          <p className="text-white text-[16px]" style={strongShadow}>
            저희 두 사람의 시작을 진심으로 축복해 주시는
          </p>
          <p className="text-white text-[16px]" style={strongShadow}>
            모든 분들께 깊은 감사드립니다.
          </p>
          <p className="text-white text-[16px]" style={strongShadow}>
            서로 아끼며, 행복하게 잘 살겠습니다.
          </p>
          <p className="text-white text-sm pt-1" style={strongShadow}>
            신랑 찬훈 · 신부 정은
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-8 py-6 ">
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="outline"
            className="w-12 h-12 rounded-full p-0 bg-white border-gray-200 hover:bg-gray-50"
            onClick={handleCopy}
            aria-label="링크 복사"
          >
            <Share className="h-5 w-5 text-gray-500" />
          </Button>
          <span className="text-xs text-gray-600">링크 복사</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="outline"
            className="w-12 h-12 rounded-full p-0 bg-white border-gray-200"
            onClick={handleShareKakao}
            aria-label="카카오톡 공유"
          >
            <MessageCircle className="h-5 w-5 text-gray-500" />
          </Button>
          <span className="text-xs text-gray-600">카카오톡 공유</span>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 bg-[#ded5d170]">
        <p className="text-xs text-gray-500">ⓒ RUMI Corp. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
