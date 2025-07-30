import MotionDiv from "./MotionDiv";

export default function Notice() {
  return (
    <MotionDiv>
      <div className="flex flex-col items-center space-y-2 pt-16 pb-6 px-4 xs400:px-6">
        <p>저희 두사람의 결혼식에 초대합니다.</p>
        <p>서로의 삶에 따뜻한 동반자가 되어</p>
        <p>사랑과 신뢰로 한 가정을 이루려 합니다.</p>
        <p>축복의 자리에 귀한 걸음 하시어</p>
        <p>저희의 새로운 시작을 함께해 주세요.</p>
        <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-3"></div>
        <div className="mt-6">
          <p className="text-lg">성홍모 · 지현진의 장남 찬훈</p>
          <p className="text-lg">문영기 · 신길옥의 차녀 정은</p>
        </div>
      </div>
    </MotionDiv>
  );
}
