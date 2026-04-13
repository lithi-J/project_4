import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import Report from "./pages/Report";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        <Routes>
          <Route path="/" element={<Auth />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="assessment" element={<Assessment />} />
            <Route path="report" element={<Report />} />
            <Route path="careers" element={<Careers />} />
          </Route>
        </Routes>

      </div>

    </BrowserRouter>
  );
}