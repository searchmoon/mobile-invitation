import { Toaster } from "./components/ui/sonner";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div
        className="bg-repeat-y bg-top"
        style={{
          backgroundImage: "url('/images/background/paper-texture.jpg')",
          backgroundSize: "100% auto",
        }}
      >
        <Preview />
        <Toaster position="bottom-center" closeButton swipeDirections={["right", "bottom"]} />
      </div>
    </div>
  );
}

export default App;
