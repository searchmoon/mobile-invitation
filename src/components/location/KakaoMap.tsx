import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import { MapPin } from "lucide-react";

export default function KakaoMap() {
  const center = { lat: 37.507171, lng: 126.890251 };

  const handleOpenKakaoMap = () => {
    const url = `https://map.kakao.com/link/map/신도림 웨딩시티,${center.lat},${center.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full aspect-[2/1] rounded-md overflow-hidden">
      <Map center={center} style={{ width: "100%", height: "100%" }} level={3}>
        <MapMarker position={center} />
        <ZoomControl position={"BOTTOMRIGHT"} />
      </Map>

      <button
        onClick={handleOpenKakaoMap}
        className="absolute top-4 left-4 z-10 bg-yellow-400 opacity-90 hover:opacity-100 rounded-sm flex gap-1 px-2 py-1 items-center"
      >
        <MapPin className="w-3 h-3 text-white" />
        <span className="text-[#eee] text-xs ">카카오맵 열기</span>
      </button>
    </div>
  );
}
