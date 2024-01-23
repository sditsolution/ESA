import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AppLayout from "./ui/Applayout.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import CalendarWindow from "./components/calendar/CalendarWindow.jsx";
import Coaching from "./components/coaching/Coaching.jsx";
import History from "./components/history/History.jsx";
import BeACoach from "./components/beACoach/BeACoach.jsx";
import Settings from "./components/settingsfolder/Settings.jsx";
import SelectedGame from "./components/games/SelectedGame.jsx";
import Coach from "./components/coaching/Coach.jsx";
import "./styles/app.css";
import Impressum from "./pages/Impressum.jsx";
import AllCoaches from "./components/coachesPage/AllCoaches.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="games" element={<Coaching />} />
            <Route path="coaches" element={<AllCoaches />} />
            <Route path="coaches/:coachname" element={<Coach />} />
            <Route path="history" element={<History />} />
            <Route path="coaching" element={<BeACoach />} />
            <Route path="settings" element={<Settings />} />
            <Route path="impressum" element={<Impressum />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptiotion={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 500,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
