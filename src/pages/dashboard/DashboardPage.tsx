import Header from "../../components/Header";
import StatsCards from "../../components/StatsCards";
import QuickActions from "../../components/QuickActions";
import ScheduleCalendar from "../../components/ScheduleCalendar";
import UpcomingPosts from "../../components/UpcomingPosts";
import ConnectedAccounts from "../../components/ConnectedAccounts";

export default function DashboardPage() {
  return (
    <div className="mb-8">
      <Header />
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <div>
          <ScheduleCalendar />
        </div>
      </div>
      <UpcomingPosts />
      <ConnectedAccounts />
    </div>
  );
}
