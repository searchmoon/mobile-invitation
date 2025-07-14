import { useId } from "react";

interface CircularTextProps {
  children: React.ReactNode;
  radius?: number; //원의 반지름
  fontSize?: number;
  className?: string;
  direction?: "clockwise" | "counterclockwise"; //시계, 반시계 방향
  startOffset?: string; //텍스트 시작위치(퍼센트 또는 px)
}

export default function CircularText({
  children,
  radius = 100,
  fontSize = 16,
  className = "fill-current text-green-900",
  direction = "clockwise",
  startOffset = "0%",
}: CircularTextProps) {
  const id = useId();
  // const diameter = radius * 2;
  const diameter = 0;
  const svgSize = diameter + 2; // 여백 추가 조절

  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  let pathD: string;
  if (direction === "clockwise") {
    pathD = `M ${centerX - radius}, ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX - radius} ${centerY}`;
  } else {
    pathD = `M ${centerX + radius}, ${centerY} A ${radius} ${radius} 0 1 0 ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 0 ${centerX + radius} ${centerY}`;
  }

  return (
    <svg width={svgSize} height={svgSize} className="overflow-visible">
      <defs>
        <path id={`circle-${id}`} d={pathD} fill="none" />
      </defs>
      <text className={className} fontSize={fontSize}>
        <textPath href={`#circle-${id}`} startOffset={startOffset}>
          {children}
        </textPath>
      </text>
    </svg>
  );
}
