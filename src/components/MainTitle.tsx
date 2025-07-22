import MotionDiv from "./MotionDiv";

function MainTitle({ title }: { title: string }) {
  return (
    <MotionDiv>
      <h1 className="text-[26px] mb-12 text-center font-spedialElite font-light tracking-wider text-point">
        {title}
      </h1>
    </MotionDiv>
  );
}

export default MainTitle;
