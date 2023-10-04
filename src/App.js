import logo from "./logo.svg";
import "./App.css";
import PunteroRed from "./pages/PunteroRed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PunteroRed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
