import { Bus, Car, Copy, ParkingCircle, Phone, Train } from "lucide-react";
import { Separator } from "./ui/separator";
import MotionDiv from "./MotionDiv";
import KakaoMap from "./location/KakaoMap";

function Location() {
  return (
    <div className="py-16">
      <MotionDiv>
        <div className="text-center mb-10">
          <p
            className="text-4xl text-gray opacity-90 tracking-wider"
            style={{
              fontFamily: "serif",
            }}
          >
            LOCATION
          </p>
        </div>
      </MotionDiv>
      <MotionDiv>
        <div className="text-center py-10 px-4 xs400:px-6 space-y-2">
          <div className="flex justify-center items-center gap-2">
            <span>웨딩시티 신도림 (8층) 맞나?</span>
            <Phone className="w-4 h-4 ml-1" />
          </div>
          <div className="opacity-50 flex justify-center items-center gap-2">
            <span>서울특별시 구로구 새말로 97 신도림테크노마트 8층 웨딩시티</span>
            <Copy className="w-4 h-4" />
          </div>
        </div>
      </MotionDiv>
      <MotionDiv>
        <div className="w-full py-4">
          <KakaoMap />
        </div>
      </MotionDiv>

      <div className="flex flex-col text-sm w-full px-4 xs400:px-6 leading-6 space-y-4 text-[#111111] opacity-90">
        <MotionDiv>
          <div>
            <div className="flex py-2 items-center">
              <Car className="w-4 h-4 mr-2 text-default" />
              <span className="font-semibold text-default">자차</span>
            </div>
            <div className="py-4">
              <p>네비게이션 : '테크노마트 웨딩시티' 검색</p>
              <p>서울특별시 구로구 새말로 97 신도림테크노마트</p>
            </div>
            <Separator className="my-2 bg-default" />
          </div>
        </MotionDiv>
        <MotionDiv>
          <div>
            <div className="flex py-2 items-center">
              <Bus className="w-4 h-4 mr-2 text-default" />
              <span className="font-semibold text-default">버스</span>
            </div>
            <div className="py-4 space-y-1">
              <p>
                <strong>신도림역 (17-102)정류장 하차</strong>
              </p>
              <p className="whitespace-pre-wrap leading-5.5 mb-5">
                지하철 신도림역 3번출구 쪽 {"\n"}
                지선 : 5619, 6411, 6511, 6611 {"\n"}
                직행 : 5200 {"\n"}
                마을 : 영등포09, 영등포12, 영등포13
              </p>
              <p>
                <strong>신도림역 (17-001)정류장 하차</strong>
              </p>
              <p className="whitespace-pre-wrap leading-5.5">
                지하철 신도림역 1번출구 쪽 {"\n"}
                (하차 후 지하보도 이용, 지하철 3번출구 방면 으로 이동 후 테크노마트 판매동 지하 1층
                통로 이용) {"\n"}
                간선 : 160, 503, 600, 660,662 {"\n"}
                지선 : 5615, 5714, 6512, 6515, 6516 6637, 6640A, 6713 {"\n"}
                직행 : 301, 320 {"\n"}
                일반 : 10, 11-1, 11-2, 83, 88, 530 {"\n"}
                공항 : 6018
              </p>
            </div>
            <Separator className="my-2 bg-default" />
          </div>
        </MotionDiv>
        <MotionDiv>
          <div>
            <div className="flex py-2 items-center">
              <Train className="w-4 h-4 mr-2 text-default" />
              <span className="font-semibold text-default">지하철</span>
            </div>
            <div className="py-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center bg-blue-600 text-white rounded-full w-4.5 h-4.5 mr-0.5">
                  <p>1</p>
                </div>
                <div className="flex items-center justify-center bg-green-600 text-white rounded-full w-4.5 h-4.5 mr-1">
                  <p>2</p>
                </div>
                <strong className="">신도림역 (1,2호선)</strong>
              </div>
              <p>
                신도림역 3번 출구 → 테크노마트 판매동 지하 1층에서 엘레베이터 또는 에스컬레이터
                이용해서 8층
              </p>
            </div>
            <Separator className="my-2 bg-default" />
          </div>
        </MotionDiv>
        <MotionDiv>
          <div>
            <div className="flex py-2 items-center">
              <ParkingCircle className="w-4 h-4 mr-2 text-default" />
              <span className="font-semibold text-default">주차</span>
            </div>
            <div className="py-4">
              <p>테크노마트 지하주차장 이용(B3~B7)</p>
              <p>주차권으로 최대 3시간 무료주차 가능합니다.</p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default Location;
