// import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import RegisterLogin from "./Components/Auth/RegisterLogin/registerLogin";
import Appbar from "./scenes/global/Appbar";
import Forgot from "./Components/Auth/ForgotPassword/forgot";
import ChangePassword from "./Components/Auth/ChangePassword/changePassword";
import Navbar from "./scenes/global/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Protected from "./Components/Protected/protected";
import UsersTable from "./Components/Users/usersTable";
import MainPage from "./Components/MainPage/mainPage";
import Dashboard from "./scenes/dashboard";
import Calendar from "./scenes/calendar";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<RegisterLogin />} />
              <Route path="LandingPage" element={<Appbar />} />
              <Route path="/Forgot" element={<Forgot />} />
              <Route path="/ChangePassword" element={<ChangePassword />} />
              <Route path="/MainPage" element={<MainPage />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Navbar" element={<Navbar />} />
              <Route path="/usersTable" element={<UsersTable />} />
              <Route path="/Calendar" element={<Calendar />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
