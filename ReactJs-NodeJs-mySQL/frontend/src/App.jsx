import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardColorChange from "./pages/CardColorChange/CardColorChange";
import SetTimer from "./pages/SetTimer/TimeControl";
import ProfileCard from "./pages/ProfileCard/ProfileCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/card" element={<CardColorChange />} />
          <Route path="/time" element={<SetTimer />} />
          <Route path="/profile-card" element={<ProfileCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
