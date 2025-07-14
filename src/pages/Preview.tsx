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
import Footer from "@/components/Footer";
import PickTheme from "@/components/PickTheme";

export type ThemeColor = "white" | "slate" | "amber" | "rose" | "indigo" | "teal" | "mood";

export default function Preview() {
  const [themeColor, setThemeColor] = useState<ThemeColor>("white");

  const RandomBanner = useMemo(() => {
    const banners = [MainBanner, MainBanner2, MainBanner3];
    const randomIndex = Math.floor(Math.random() * banners.length);
    return banners[randomIndex];
  }, []);

  const handlePickColor = (name: ThemeColor) => {
    setThemeColor(name);
  };

  return (
    <div className={`flex-col w-full max-w-[460px] theme-${themeColor} bg-theme-light`}>
      <PickTheme handlePickColor={handlePickColor} />
      <RandomBanner />
      <Notice />
      <GalleryGrid />
      <WeddingCalendar />
      <ScrollVideoComponent />
      <Location />
      <AccountInfomation />
      <Footer />
    </div>
  );
}
