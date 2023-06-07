import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Game from "./components/routes/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
