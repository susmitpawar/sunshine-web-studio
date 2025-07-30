import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
