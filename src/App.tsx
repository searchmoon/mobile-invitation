import MapLoader from "./components/MapLoader";
import { Toaster } from "./components/ui/sonner";
import Preview from "./pages/Preview";

function App() {
  /* 카카오맵 동적으로 생성 maploader */
  MapLoader();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div
        className="bg-repeat-y bg-top"
        style={{
          backgroundImage: "url('/assets/images/background/paper-texture.webp')",
          backgroundSize: "100% auto",
        }}
      >
        <MapLoader />
        <Preview />
        <Toaster position="bottom-center" closeButton swipeDirections={["right", "bottom"]} />
      </div>
    </div>
  );
}

export default App;
