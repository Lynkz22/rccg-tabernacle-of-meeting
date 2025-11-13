import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import WhoWeAre from "./Routes/WhoWeAre";
import Contact from "./Routes/Contact";
import Events from "./Routes/Events";
import Calendar from "./Routes/Calendar";
import PrayerRequest from "./Routes/PrayerRequest";
import GetInTouch from "./Routes/GetInTouch";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "auto" });
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PrayerRequest" element={<PrayerRequest />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
