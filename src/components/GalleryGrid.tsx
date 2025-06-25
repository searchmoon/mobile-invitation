import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import MotionDiv from "./MotionDiv";

export default function GalleryGrid() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // 갤러리 이미지들은 나중에 supabase 에서 가지고오는 이미지로 대체하기.
  const imageModules = import.meta.glob("/public/images/gallery/bebe*.jpg", {
    eager: true, //즉시 가져오기(lazy 가 아니라 동기 라는 뜻)
    import: "default", //glob 옵션에서 불러올 모듈에서 default 속성만 추출하겠다는 설정
  });

  // useEffect(() => {
  //   // 이미지 프리로드
  //   const img = new Image();
  //   img.onload = () => setImageLoaded(true);
  //   img.src = "/images/main.jpg";
  // }, []);

  const galleryImages = Object.values(imageModules) as string[];

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  // Carousel API 이벤트 리스너
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
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
    <div className={`bg-theme-light`}>
      <div className="flex justify-center pt-18 pb-8">
        <MotionDiv>
          <p className="text-3xl font-serif text-gray opacity-90 tracking-wider">GALLERY</p>
        </MotionDiv>
      </div>
      <MotionDiv>
        <div className="w-full grid gap-[2px] grid-cols-3">
          {visibleImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                className="relative w-full aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image || "/placeholder.svg?height=400&width=400"}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className="object-cover w-full h-full"
                />
                {!imageLoaded && (
                  <div className="absolute w-full h-full inset-0 bg-gray-400/50 animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </MotionDiv>
      <MotionDiv>
        <div
          className="flex flex-col items-center justify-center py-6 cursor-pointer"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <span className="text-lightgray text-[14px]">{showAll ? "닫기" : "더보기"}</span>
          <ChevronDown
            strokeWidth={1}
            className={`w-[18px] h-[18px] transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
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
                      src={image || "/placeholder.svg"}
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
