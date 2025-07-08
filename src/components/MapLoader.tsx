import { useEffect } from "react";

function MapLoader() {
  const appKey = import.meta.env.VITE_KAKAOMAP_APP_KEY;

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services,clusterer`;
    script.referrerPolicy = "no-referrer-when-downgrade";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [appKey]);

  return null;
}

export default MapLoader;
