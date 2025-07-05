import MotionDiv from "./MotionDiv";

export default function Notice() {
  return (
    <MotionDiv>
      <div className="text-center space-y-3 py-6">
        <p className="opacity-60 whitespace-pre-wrap">소중한 분들을 초대합니다.</p>
        <p className="opacity-60 whitespace-pre-wrap">
          같은 곳을 바라보는 두 사람이 {"\n"}
          인생의 새로운 계절을 맞이합니다.
        </p>
        <p className="opacity-60 whitespace-pre-wrap">귀한 걸음으로 저희의 시작을 축하해주세요.</p>
        <p className="text-lg">신랑 똥딴훈 · 신부 문똥똥</p>
      </div>
    </MotionDiv>
  );
}
