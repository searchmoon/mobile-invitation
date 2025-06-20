import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import MainBanner from "@/components/MainBanner";
import WeddingCalendar from "@/components/WeddingCalendar";
import AccountInfomation from "@/components/AccountInfomation";
import Location from "@/components/Location";

export default function Preview() {
  const [themeColor, setThemeColor] = useState<string>("slate");
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
    <div className={`flex-col max-w-[460px] w-full theme-${themeColor}`}>
      <div className="absolute right-0 top-3 flex flex-col">
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
      <MainBanner />
      <GalleryGrid />
      <WeddingCalendar />
      <Location />
      <AccountInfomation />
    </div>
  );
}
