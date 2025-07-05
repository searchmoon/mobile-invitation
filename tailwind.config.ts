// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 다크모드 대응하고 싶다면
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;
