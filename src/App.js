import "./App.css";
import PunteroRed from "./pages/PunteroRed";
import JoinUsForm from "./pages/JoinUsForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PunteroRed />} />
        <Route path="join-us-form" element={<JoinUsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
