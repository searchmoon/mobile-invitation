import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import MotionDiv from "./MotionDiv";
import GalleryImage from "./galleryGrid/GalleryImage";
import useModalScrollLock from "@/hooks/useModalScrollLock";
import MainTitle from "./MainTitle";

export default function GalleryGrid() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // 이미지 목록은 useMemo로 캐싱 (빌드타임에 결정, 변하지 않음)
  const galleryImages = useMemo(() => {
    const imageModules = import.meta.glob("/public/assets/images/gallery/JECH_*.jpg", {
      eager: true,
      import: "default",
    });
    return Object.values(imageModules) as string[];
  }, []);

  // visibleImages도 useMemo (galleryImages, showAll이 바뀔 때만 slice)
  const visibleImages = useMemo(
    () => (showAll ? galleryImages : galleryImages.slice(0, 9)),
    [showAll, galleryImages],
  );

  // 모달이 열렸을 때 줌을 허용하고, 백그라운드 스크롤 막기
  useModalScrollLock(selectedImage !== null);

  // Carousel API 이벤트 리스너
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // 선택된 이미지가 변경될 때 carousel을 해당 인덱스로 이동
  useEffect(() => {
    if (api && selectedImage !== null) {
      api.scrollTo(selectedImage);
    }
  }, [api, selectedImage]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setCurrent(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="pt-16">
      <MainTitle title="GALLERY" />
      <MotionDiv>
        <div className="w-full grid gap-[2px] grid-cols-3">
          {visibleImages.map((image, index) => (
            <GalleryImage key={image} image={image} index={index} onClick={handleImageClick} />
          ))}
        </div>
      </MotionDiv>
      <MotionDiv>
        <div
          className="flex flex-col items-center justify-center py-6 cursor-pointer"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <span className="text-600gray text-[14px] ">{showAll ? "닫기" : "더보기"}</span>
          <ChevronDown
            strokeWidth={1}
            className={`w-[18px] h-[18px] transition-transform duration-300 text-600gray ${showAll ? "rotate-180" : ""}`}
          />
        </div>
      </MotionDiv>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
            >
              <X className="w-7 h-7" strokeWidth={1.2} />
            </button>

            <Carousel
              setApi={setApi}
              className="w-full h-full flex items-center"
              opts={{
                startIndex: selectedImage, // 처음 시작할 인덱스를 지정. 이걸 추가해야 갤러리에서 처음 사진을 클릭했을때, 가로 스크롤이 적용이 안됨.
                loop: true,
              }}
            >
              <CarouselContent className="flex items-center">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="h-full flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="object-contain max-h-screen mx-auto w-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <button
                onClick={handlePrevious}
                className="absolute left-2 xs400:left-3 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300"
              >
                <ChevronLeft className="w-8 h-8" strokeWidth={1.2} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 xs400:right-3 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300"
              >
                <ChevronRight className="w-8 h-8" strokeWidth={1.2} />
              </button>
            </Carousel>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {current + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
