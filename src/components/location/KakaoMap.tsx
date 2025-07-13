import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import { Button } from "../ui/button";

export default function KakaoMap() {
  const locationName = "웨딩시티 신도림점";
  const address = "서울특별시 구로구 새말로 97";
  const coordinates = { lat: 37.507171, lng: 126.890251 };

  const mapConfigs = [
    {
      type: "kakao",
      label: "카카오맵",
      url: `https://map.kakao.com/link/map/${encodeURIComponent(locationName)},${coordinates.lat},${coordinates.lng}`,
      imgSrc: "/assets/icons/kakaomap.webp",
      borderColor: "border-[#fae100]/30",
      textColor: "text-black",
    },
    {
      type: "naver",
      label: "네이버지도",
      url: `https://map.naver.com/v5/search/${encodeURIComponent(address)}`,
      imgSrc: "/assets/icons/navermap.webp",
      borderColor: "border-[#2db400]/20",
      textColor: "text-black",
    },
    {
      type: "google",
      label: "구글지도",
      url: `https://www.google.com/maps/search/${encodeURIComponent(locationName)}/@${coordinates.lat},${coordinates.lng},17z`,
      imgSrc: "/assets/icons/googlemap.webp",
      borderColor: "border-black/10",
      textColor: "text-black",
    },
  ];

  const openMap = (url: string) => {
    window.open(url);
  };

  return (
    <div>
      <div className="relative w-full aspect-[2/1] rounded-md overflow-hidden">
        <Map center={coordinates} style={{ width: "100%", height: "100%" }} level={3}>
          <MapMarker position={coordinates} />
          <ZoomControl position={"BOTTOMRIGHT"} />
        </Map>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 mx-2">
        {mapConfigs.map((config) => (
          <Button
            key={config.type}
            className={`flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-opacity border ${config.borderColor} ${config.textColor}`}
            onClick={() => openMap(config.url)}
          >
            <img src={config.imgSrc} className="w-4 h-4 rounded-xs" alt={config.type} />
            <span className="text-sm">{config.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
