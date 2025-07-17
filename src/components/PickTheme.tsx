// import type { ThemeColor } from "@/pages/Preview";

interface PickThemeProps {
  handlePickColor?: (name: string) => void;
}

// interface ThemeOption {
//   name: ThemeColor;
//   color: string;
// }
// 이 컴포넌트의 부모 컴포넌트에서
// export type ThemeColor = "white" | "slate" | "amber" | "rose" | "indigo" | "teal" | "mood";

// const [themeColor, setThemeColor] = useState<ThemeColor>("white");

// const handlePickColor = (name: ThemeColor) => {
//     setThemeColor(name);
//   };

function PickTheme({ handlePickColor }: PickThemeProps) {
  console.log(handlePickColor);
  // const themeColors: ThemeOption[] = [
  //   { name: "white", color: "bg-white-200" },
  //   { name: "slate", color: "bg-slate-200" },
  //   { name: "amber", color: "bg-amber-200" },
  //   { name: "rose", color: "bg-rose-200" },
  //   { name: "indigo", color: "bg-indigo-200" },
  //   { name: "teal", color: "bg-teal-200" },
  //   { name: "mood", color: "bg-[#d1baaf]" },
  // ];

  return (
    <div className="absolute right-0 top-3 flex flex-col z-50">
      <p>pick theme</p>
      <div className="flex">
        {/* {themeColors.map((theme) => (
          <div
            key={theme.name}
            className={`${theme.color} w-5 h-5 rounded-tr-lg rounded-bl-lg mx-[2px]`}
            onClick={() => handlePickColor(theme.name)}
          ></div>
        ))} */}
      </div>
    </div>
  );
}

export default PickTheme;
