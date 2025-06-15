import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { MotionProps } from "motion/react";

type MotionDivProps = {
  children: ReactNode;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  viewport?: MotionProps["viewport"];
  className?: string;
};

export default function MotionDiv({
  children,
  initial,
  whileInView,
  transition,
  viewport,
  className = "",
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, ...(initial as object) }} // 초기상태 정의
      whileInView={{ opacity: 1, y: 0, ...(whileInView as object) }} // y축 위치 제자리찾게 하기
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
        ...(transition as object),
      }}
      viewport={{ once: false, ...(viewport as object) }} // 화면에 들어올때마다 애니메이션 재실행되게
      className={className}
    >
      {children}
    </motion.div>
  );
}
