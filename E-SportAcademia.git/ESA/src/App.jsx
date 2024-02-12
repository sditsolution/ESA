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
import Course from "./components/coaching/Course.jsx";
import Verification from "./pages/Verification.jsx";
import FailedVerification from "./pages/FailedVerification.jsx";
import ChangeEmail from "./pages/ChangeEmail.jsx";
import { createContext, useState, useEffect } from "react";
export const UserContext = createContext(null);

function App() {
  const [userContext, setUserContext] = useState(null);
  const loginUser = async (userData) => {
    // Hier holst du den Benutzer aus der Datenbank und setzt ihn im Kontext
    // Beispiel: const user = await fetchUserFromDatabase(userData);
    setUserContext(userData);

    // Speichere den Benutzerkontext im lokalen Speicher
    localStorage.setItem("userContext", JSON.stringify(userData));
  };
  const logoutUser = () => {
    // Hier kannst du den Benutzer ausloggen und den Kontext zurücksetzen
    setUserContext(null);

    // Entferne den Benutzerkontext aus dem lokalen Speicher
    localStorage.removeItem("userContext");
    //history.push("/login");
  };

  useEffect(() => {
    // Versuche, den Benutzerkontext aus dem lokalen Speicher zu laden
    const storedUserContext = localStorage.getItem("userContext");
    if (storedUserContext) {
      setUserContext(JSON.parse(storedUserContext));
    }
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider
        value={{
          data: userContext,
          setData: setUserContext,
          loginUser,
          logoutUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/login" />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="verification" element={<Verification />} />
            <Route path="failedverification" element={<FailedVerification />} />
            <Route path="login" element={<Login />} />
            <Route path="changeEmail" element={<ChangeEmail />} />
            <Route element={<AppLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="games" element={<Coaching />} />
              <Route path="coaches" element={<AllCoaches />} />
              <Route path="coaches/:coachname" element={<Coach />} />
              <Route path="coaches/:coachname/courses" element={<Course />} />
              <Route path="history" element={<History />} />
              <Route path="coaching" element={<BeACoach />} />
              <Route path="/settings/:credential" element={<Settings />} />
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
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
