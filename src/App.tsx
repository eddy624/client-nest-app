
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import { BrowserRouter, Routes, Route } from "r
import Sidebar from "./components/Sidebar";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SchedulePage from "./pages/dashboard/SchedulePage";
import "./index.css";

function DashboardLayout() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#f9fafe]">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 md:p-8 ml-0 lg:ml-64">
          <Routes>
            <Route
              path="/"
              element={<DashboardPage />}
            />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="*" element={<Navigate to="/auth/register" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
