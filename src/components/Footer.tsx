import { Share, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import MotionDiv from "./MotionDiv";

function Footer() {
  const deploymentLink = "https://mobile-invitation-zeta.vercel.app";
  const naverLocationName = "테크노마트 웨딩시티";

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
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "location",
        address: "서울 구로구 새말로 97",
        content: {
          title: "성찬훈 ♥️ 문정은 결혼합니다",
          description: "10월 25일 오후 13:20분 웨딩시티 신도림 8층 아모르홀",
          imageUrl: `${deploymentLink}/assets/JECH_40-7GtNyFpY.jpg`,
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
              mobileWebUrl: "https://map.kakao.com/link/map/326511102",
              webUrl: "https://map.kakao.com/link/map/326511102",
            },
          },
        ],
        social: { likeCount: 120, commentCount: 5, sharedCount: 20 },
      });
    }
  };

  const strongShadow = {
    textShadow: "1px 1px 10px rgb(255 255 255 /0.9)",
    filter: "drop-shadow(0 0 5px rgb(255 255 255 /0.9))",
  };

  return (
    <div>
      <MotionDiv>
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

            <div className="absolute inset-0"></div>
          </div>
          <div
            className="absolute top-0 right-0 left-0 flex flex-col gap-[2px] justify-center items-center pt-5 px-4 pointer-events-none font-nanumPen font-medium text-[20px] leading-6 text-700gray tracking-[2px]"
            style={strongShadow}
          >
            <p>저희 두 사람의 시작을 진심으로 축복해 주시는</p>
            <p>모든 분들께 깊은 감사드립니다.</p>
            <p>서로 아끼며, 행복하게 잘 살겠습니다.</p>
            <p className="text-[18px] pt-1">신랑 찬훈 · 신부 정은</p>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv>
        <div className="flex justify-center gap-8 py-6 ">
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full p-0 bg-white border-gray-200 hover:bg-gray-50"
              onClick={handleCopy}
              aria-label="링크 복사"
            >
              <Share className="h-5 w-5 text-500gray" />
            </Button>
            <span className="text-xs">링크 복사</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full p-0 bg-white border-gray-200"
              onClick={handleShareKakao}
              aria-label="카카오톡 공유"
            >
              <MessageCircle className="h-5 w-5 text-500gray" />
            </Button>
            <span className="text-xs">카카오톡 공유</span>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 bg-[#ded5d170]">
          <p className="text-xs text-500gray">ⓒ RUMI Corp. All Rights Reserved.</p>
        </div>
      </MotionDiv>
    </div>
  );
}

export default Footer;
