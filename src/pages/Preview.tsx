import { useMemo, useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import MainBanner from "@/components/MainBanner";
import MainBanner2 from "@/components/MainBanner2";
import MainBanner3 from "@/components/MainBanner3";
import WeddingCalendar from "@/components/WeddingCalendar";
import AccountInfomation from "@/components/AccountInfomation";
import Location from "@/components/Location";
import ScrollVideoComponent from "@/components/video/ScrollVideo";
import Notice from "@/components/Notice";

export default function Preview() {
  const [themeColor, setThemeColor] = useState<string>("slate");

  const RandomBanner = useMemo(() => {
    const banners = [MainBanner, MainBanner2, MainBanner3];
    const randomIndex = Math.floor(Math.random() * banners.length);
    return banners[randomIndex];
  }, []);

  const handlePickColor = (name: string) => {
    setThemeColor(name);
  };

  const themeColors = [
    { name: "slate", color: "bg-slate-200" },
    { name: "amber", color: "bg-amber-200" },
    { name: "rose", color: "bg-rose-200" },
    { name: "indigo", color: "bg-indigo-200" },
    { name: "teal", color: "bg-teal-200" },
    { name: "mood", color: "bg-[#d1baaf]" },
  ];

  return (
    <div className={`flex-col w-full max-w-[460px] theme-${themeColor}`}>
      <div className="absolute right-0 top-3 flex flex-col z-50">
        <p>pick theme</p>
        <div className="flex">
          {themeColors.map((theme) => (
            <div
              key={theme.name}
              className={`${theme.color} w-5 h-5 rounded-tr-lg rounded-bl-lg mx-[2px]`}
              onClick={() => handlePickColor(theme.name)}
            ></div>
          ))}
        </div>
      </div>
      <RandomBanner />
      <Notice />
      <GalleryGrid />
      <WeddingCalendar />
      <ScrollVideoComponent />
      <Location />
      <AccountInfomation />
    </div>
  );
}
