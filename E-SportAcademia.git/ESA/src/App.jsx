import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AppLayout from "./pages/Applayout.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import CalendarWindow from "./components/calendar/CalendarWindow.jsx";
import Coaching from "./components/coaching/Coaching.jsx";
import History from "./components/history/History.jsx";
import BeACoach from "./components/beACoach/BeACoach.jsx";
import Settings from "./components/settingsfolder/Settings.jsx";
import SelectedGame from "./components/coaching/SelectedGame.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/home/calendar" element={<CalendarWindow />} />
            <Route path="/home/games" element={<Coaching />}></Route>
            <Route
              path="/home/games/:selectedGame"
              element={<SelectedGame />}
            />

            <Route path="/home/history" element={<History />} />
            <Route path="/home/beACoach" element={<BeACoach />} />
            <Route path="/home/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
