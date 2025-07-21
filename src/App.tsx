
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SchedulePage from "./pages/dashboard/SchedulePage";
import "./index.css";

function App() {
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

export default App;
