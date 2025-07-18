import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import Header from "./components/Header";
import PostsReachChart from "./components/PostsReachChart";
import ScheduleCalendar from "./components/ScheduleCalendar";
import UpcomingPosts from "./components/UpcomingPosts";
import ConnectedAccounts from "./components/ConnectedAccounts";
import "./index.css";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#f9fafe]">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 ml-0 lg:ml-64">
        <Header />
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PostsReachChart />
          </div>
          <div>
            <ScheduleCalendar />
          </div>
        </div>
        <UpcomingPosts />
        <ConnectedAccounts />
      </main>
    </div>
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
