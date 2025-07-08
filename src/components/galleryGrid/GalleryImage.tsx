import { memo, useState } from "react";

interface GalleryImageProps {
  image: string;
  index: number;
  onClick: (index: number) => void;
}

function GalleryImage({ image, index, onClick }: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => onClick(index)}
    >
      <img
        src={image}
        alt={`Gallery ${index + 1}`}
        loading="lazy"
        onLoad={() => setIsLoaded((prev) => !prev)}
        className={`object-cover w-full h-full transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!isLoaded && (
        <div className="absolute w-full h-full inset-0 bg-gray-400/50 animate-pulse"></div>
      )}
    </div>
  );
}

export default memo(GalleryImage);
