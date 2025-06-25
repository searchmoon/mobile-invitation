import Matter from "matter-js";
import { useEffect, useRef } from "react";

const MixedMatter = () => {
  const sceneRef = useRef<HTMLDivElement>(null); // 캔버스 컨테이너(Matter.js의 캔버스를 그릴 곳)
  const engineRef = useRef<Matter.Engine | null>(null); // 물리 엔진
  const renderRef = useRef<Matter.Render | null>(null); // 캔버스를 그리는 렌더 객체
  const runnerRef = useRef<Matter.Runner | null>(null); // 애니메이션 루프

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Composites = Matter.Composites;
    const Common = Matter.Common;
    console.log("Common", Common);
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;
    const Composite = Matter.Composite;
    const Bodies = Matter.Bodies;
    console.log("bodies", Bodies);

    // create engine matter.js 초기화
    const engine = Engine.create(); // 물리 엔진 생성
    engineRef.current = engine;
    const world = engine.world; // 엔진 안의 월드 (모든 객체가 들어감)

    // create renderer

    const render = Render.create({
      element: sceneRef.current!, // 위에서 만든 DOM 참조. 마지막 !는 null 이 아님을 단언
      engine: engine, // 렌더링에 쓸 엔진
      options: {
        width: 800,
        height: 600,
        showAngleIndicator: false,
        wireframes: false, // 실제 색상/모양을 보이게
        background: "#fff", // 배경색
      },
    });

    renderRef.current = render;

    Render.run(render);

    // create runner
    const runner = Runner.create(); // 매 프레임마다 애니메이션 돌리는 루프
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // add bodies
    // const stack = Composites.stack(
    //   20,
    //   20, // 시작 위치 (x, y)
    //   10,
    //   5, // 가로 개수, 세로 개수 (총 가로 * 세로 개)
    //   0,
    //   0, // 간격
    //   function (x, y) {
    //     const sides = Math.round(Common.random(1, 8));
    //     let chamfer = null;
    //     if (sides > 2 && Common.random() > 0.7) {
    //       chamfer = { radius: 10 };
    //     }
    //     switch (Math.round(Common.random(0, 1))) {
    //       case 0:
    //         if (Common.random() < 0.8) {
    //           return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), {
    //             chamfer,
    //           });
    //         } else {
    //           return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), {
    //             chamfer,
    //           });
    //         }
    //       case 1:
    //         return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer });
    //       default:
    //         return null;
    //     }
    //   }, //여러 모양의 랜덤 도형을 만들때!
    // );

    const stack = Composites.stack(
      20,
      20, // 시작 위치 (x, y)
      10,
      5, // 가로 개수, 세로 개수 (총 가로 * 세로 개)
      0,
      0, // 간격
      function (x: number, y: number) {
        const size = Common.random(10, 25); // 10-20 사이의 랜덤크기 생성
        return Bodies.circle(x, y, size);
      },
    );
    Composite.add(world, stack);

    // 벽 추가
    Composite.add(world, [
      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }), // 위쪽 벽
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }), // 아래쪽 벽
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }), // 오른쪽 벽
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }), // 왼쪽 벽 isStatic true 는 벽이 움직이지 않게
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

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    // fit the render viewport to the scene
    Matter.Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
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
      Composite.clear(world, false); // 월드 객체 클리어
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="w-full h-full flex items-center justify-center bg-slate-900 rounded-lg shadow-lg"
      style={{ minHeight: "600px", minWidth: "800px" }}
    />
  );
};

export default MixedMatter;
