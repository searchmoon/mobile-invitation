import { Toaster } from "./components/ui/sonner";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Preview />
      <Toaster position="bottom-center" closeButton swipeDirections={["right", "bottom"]} />
    </div>
  );
}

export default App;
