import { useEffect } from "react";

function useModalScrollLock(isOpen: boolean) {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    const defaultViewportContent =
      "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";

    if (isOpen) {
      // 모달이 열리면 스크롤을 막고 줌을 허용
      document.body.style.overflow = "hidden";
      metaViewport?.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0, user-scalable=yes",
      );

      // 모달이 닫힐 때 실행될 cleanup 함수를 반환
      return () => {
        // SplashScreen이 활성 상태가 아닐 때만 스크롤 복원
        if (!document.body.classList.contains("splash-screen-active")) {
          document.body.style.overflow = "";
        }
        // 뷰포트 설정은 항상 원래대로 복원
        metaViewport?.setAttribute("content", defaultViewportContent);
      };
    }
  }, [isOpen]);
}

export default useModalScrollLock;
