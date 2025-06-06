import GalleryGrid from '@/components/GalleryGrid';
import MainBanner from '@/components/MainBanner';

export default function Preview() {
  return (
    <div className="flex-col">
      <MainBanner />
      <GalleryGrid />
    </div>
  );
}
