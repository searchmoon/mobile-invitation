import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";
import { useRef, useState } from "react";
import placeholder from "@/assets/placeholder.svg";

export default function GalleryGrid() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const pointerStartX = useRef<number | null>(null);

  // 갤러리 이미지들은 나중에 supabase 에서 가지고오는 이미지로 대체하기.
  const imageModules = import.meta.glob("/src/assets/images/gallery/wedding*.jpg", {
    eager: true, //즉시 가져오기(lazy 가 아니라 동기 라는 뜻)
    import: "default", //glob 옵션에서 불러올 모듈에서 default 속성만 추출하겠다는 설정
  });
  const galleryImages = Object.values(imageModules) as string[];

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX; //useState 의 set 함수를 useRef 로 바꿔줬다. 즉시 반영됨
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current !== null) {
      const distance = pointerStartX.current - e.clientX;
      if (distance > 30) {
        nextImage();
      } else if (distance < -30) {
        prevImage();
      }
    }
    pointerStartX.current = null;
  };

  return (
    <div className="mt-4 bg-slate-50">
      <div className="w-full grid gap-[2px] grid-cols-3">
        {visibleImages.map((image, index) => (
          <div key={index} className="flex justify-center items-center bg-gray-300">
            <div
              className="relative w-full aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image || placeholder}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex justify-center py-9 cursor-pointer"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {!showAll ? <ChevronDown strokeWidth={1} /> : <ChevronUp strokeWidth={1} />}
      </div>

      {/* 이미지 클릭 시 모달 */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black touch-none" //기본 터치 스크롤 방지
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
            >
              <X className="w-7 h-7" strokeWidth={1.2} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 z-10 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" strokeWidth={1.2} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 z-10 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" strokeWidth={1.2} />
            </button>

            <img
              src={galleryImages[selectedImage] || "/placeholder.svg"}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
