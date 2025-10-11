import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-100vw h-[calc(100vh-16px)] m-2">
      <Navbar />

      <Home />
    </div>
  );
}

export default App;
