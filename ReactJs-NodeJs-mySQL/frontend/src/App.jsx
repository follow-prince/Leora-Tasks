import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardColorChange from "./pages/CardColorChange/CardColorChange";
import SetTimer from "./pages/SetTimer/TimeControl";
import ProfileCard from "./pages/ProfileCard/ProfileCard";
import HomePage from "./pages/RootPage/HomePage";
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageMemo />} />
          <Route path="/card" element={<CardColorChangeMemo />} />
          <Route path="/time" element={<SetTimerMemo />} />
          <Route path="/profile-card" element={<ProfileCardMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const HomePageMemo = React.memo(HomePage);
const CardColorChangeMemo = React.memo(CardColorChange);
const SetTimerMemo = React.memo(SetTimer);
const ProfileCardMemo = React.memo(ProfileCard);

export default App;
