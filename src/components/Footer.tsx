import { Share, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function Footer() {
  const handleCopy = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() =>
      toast("복사가 완료 되었습니다.", {
        description: `${link}`,
        descriptionClassName: "text-sm !text-gray-700 ",
        duration: 1500,
      }),
    );
  };
  const thumbnailImg = "/assets/JECH_45-BaczHcok.jpg";

  // useEffect(() => {
  //   console.log("VITE_KAKAO_API_KEY:", import.meta.env.VITE_KAKAO_API_KEY);
  //   // SDK 초기화 (중복 초기화 방지)
  //   if (window.Kakao && !window.Kakao.isInitialized()) {
  //     window.Kakao.cleanup(); // 기존 초기화 정리
  //     const appKey = import.meta.env.VITE_KAKAO_API_KEY;
  //     window.Kakao.init(appKey); // 발급받은 JavaScript 키 입력
  //   }

  //   console.log("카카오 SDK 초기화 완료:", window.Kakao.isInitialized());
  // }, []);

  const handleShareKakao = () => {
    // if (!window.Kakao || !window.Kakao.isInitialized()) {
    //   toast.error("카카오톡 공유 연결에 실패했습니다.");
    //   return;
    // }
    // const imageUrl = `${window.location.origin}/assets/images/gallery/JECH_06.jpg`;
    // const imageUrl2 = `/assets/images/gallery/JECH_06.jpg`;
    const locationName = "웨딩시티 신도림";

    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "성찬훈 하뚜 문정은 결혼합니다",
          description: "10월 25일 오후 13:20분 웨딩시티 신도림 아모르홀",
          imageUrl: `${window.location.origin}${thumbnailImg}`,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
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

  return (
    <div>
      <div className="flex justify-center gap-8 py-6 bg-gray-500/10">
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
      <div className="flex items-center justify-center py-4 bg-[#e8e0dc70]">
        <p className="text-xs text-gray-500">ⓒ RUMI Corp. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
