import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
// import type { GuestBookEntry } from "./GuestBook";
import DialogExample from "./DialogMessage";

export interface GuestBookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
  color: string;
}

interface BodyWithPostData extends Matter.Body {
  postData?: GuestBookEntry;
}

const MixedMatter = ({ entries }: { entries: GuestBookEntry[] }) => {
  const sceneRef = useRef<HTMLDivElement>(null); // 캔버스 컨테이너(Matter.js의 캔버스를 그릴 곳)
  const engineRef = useRef<Matter.Engine | null>(null); // 물리 엔진
  const renderRef = useRef<Matter.Render | null>(null); // 캔버스를 그리는 렌더 객체
  const runnerRef = useRef<Matter.Runner | null>(null); // 애니메이션 루프
  const [selectedEntry, setSelectedEntry] = useState<GuestBookEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const WIDTH = 360;
  const HEIGHT = 320;

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    // const Composites = Matter.Composites;
    const Common = Matter.Common;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;
    const Composite = Matter.Composite;
    const Bodies = Matter.Bodies;
    const World = Matter.World;

    // create engine matter.js 초기화
    const engine = Engine.create(); // 물리 엔진 생성
    engineRef.current = engine;
    const engineWorld = engine.world; // 엔진 안의 월드 (모든 객체가 들어감)

    // create renderer

    const render = Render.create({
      element: sceneRef.current!, // 위에서 만든 DOM 참조. 마지막 !는 null 이 아님을 단언
      engine: engine, // 렌더링에 쓸 엔진
      options: {
        width: WIDTH,
        height: HEIGHT,
        pixelRatio: window.devicePixelRatio || 1, // 고해상도에서도 화질이 선명하게 나오게 하는 옵션 추가
        showAngleIndicator: false,
        wireframes: false, // 실제 색상/모양을 보이게
        background: "", // 배경색
      },
    });

    renderRef.current = render;

    Render.run(render);

    // 도형 위에 이름 그리기
    Matter.Events.on(render, "afterRender", () => {
      const context = render.context; // 캔버스 컨텍스트
      const bodies = Matter.Composite.allBodies(engine.world);

      context.font = "12px sans-serif";
      context.fillStyle = "#fff"; // 글자 색
      // context.strokeStyle = "#000"; // 글자 테두리
      context.lineWidth = 2;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.globalAlpha = 0.7;
      context.lineWidth = 2;

      bodies.forEach((body) => {
        const postData = (body as BodyWithPostData).postData;
        if (postData) {
          const { x, y } = body.position;
          // context.strokeText(postData.name, x, y); // 테두리 먼저
          context.fillText(postData.name, x, y); // 이렇게 하면 중앙에 텍스트 위치
        }
      });
    });

    // create runner
    const runner = Runner.create(); // 매 프레임마다 애니메이션 돌리는 루프
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // 기존 world를 비우고 새로 도형 추가
    Matter.World.clear(engine.world, false); // 기존 바디만 제거, 제약조건은 유지

    const shapes = entries.map((entry) => {
      const size = Common.random(15, 40); // 10-50 사이의 랜덤크기 생성
      const body = Bodies.circle(100, 0, size) as BodyWithPostData;
      body.postData = entry; // 도형에 객체 정보 연결!
      return body;
    });

    Composite.add(engineWorld, shapes);

    // 벽 추가
    Composite.add(engineWorld, [
      // walls
      // Bodies.rectangle(250, 0, 500, 10, { isStatic: true }), // 위쪽 벽 순서대로 x좌표, y좌표, width, height
      // Bodies.rectangle(250, 400, 500, 10, { isStatic: true }), // 아래쪽 벽
      // Bodies.rectangle(500, 200, 10, 400, { isStatic: true }), // 오른쪽 벽
      // Bodies.rectangle(0, 200, 10, 400, { isStatic: true }), // 왼쪽 벽 isStatic true 는 벽이 움직이지 않게
      Bodies.rectangle(WIDTH / 2, 0, WIDTH, 10, {
        isStatic: true,
        render: { fillStyle: "#64748b" }, // slate-500
      }),
      // bottom
      Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, 10, {
        isStatic: true,
        render: { fillStyle: "#64748b" },
      }),
      // right
      Bodies.rectangle(WIDTH, HEIGHT / 2, 10, HEIGHT, {
        isStatic: true,
        render: { fillStyle: "#64748b" },
      }),
      // left
      Bodies.rectangle(0, HEIGHT / 2, 10, HEIGHT, {
        isStatic: true,
        render: { fillStyle: "#64748b" },
      }),
    ]);

    // add mouse control (마우스 인터렉션)
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }, //클릭할때 나는 표시 안보이게
      },
    });

    Composite.add(engineWorld, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      const mousePosition = event.mouse.position;
      const bodies = Matter.Composite.allBodies(engine.world);

      // 마우스 위치에 있는 모든 바디 중 첫 번째를 찾음
      const clickedBody = bodies.find(
        (body) =>
          Matter.Bounds.contains(body.bounds, mousePosition) &&
          Matter.Vertices.contains(body.vertices, mousePosition),
      ) as BodyWithPostData | undefined;

      if (clickedBody && clickedBody.postData) {
        // React state로 클릭된 postData를 전달 (이 부분이 중요!)
        setSelectedEntry(clickedBody.postData);
        setIsModalOpen(true);
      }
    });

    render.mouse = mouse;

    // fit the render viewport to the scene
    Matter.Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: WIDTH, y: HEIGHT },
    });

    // cleanup (컴포넌트 제거 시 리소스 정리)
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      if (render.canvas) {
        // 캔버스 엘리먼트가 존재하는지 확인 후 제거
        render.canvas.remove();
      }
      Composite.clear(engineWorld, false); // 월드 객체 클리어
      World.clear(engineWorld, false);
    };
  }, [entries]);

  return (
    <>
      <div
        ref={sceneRef}
        className="scroll-auto overflow-auto w-full h-full flex items-center justify-center"
        style={{ minHeight: HEIGHT, minWidth: WIDTH }}
      ></div>
      <DialogExample
        selectedEntry={selectedEntry}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default MixedMatter;
