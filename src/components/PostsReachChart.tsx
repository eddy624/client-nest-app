import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const weeklyData = [
  { name: "Mon", TikTok: 120, Instagram: 200, Twitter: 150, LinkedIn: 80 },
  { name: "Tue", TikTok: 90, Instagram: 180, Twitter: 120, LinkedIn: 100 },
  { name: "Wed", TikTok: 160, Instagram: 250, Twitter: 170, LinkedIn: 110 },
  { name: "Thu", TikTok: 140, Instagram: 220, Twitter: 130, LinkedIn: 90 },
  { name: "Fri", TikTok: 200, Instagram: 300, Twitter: 190, LinkedIn: 120 },
  { name: "Sat", TikTok: 180, Instagram: 270, Twitter: 160, LinkedIn: 130 },
  { name: "Sun", TikTok: 100, Instagram: 210, Twitter: 140, LinkedIn: 95 },
];

const monthlyData = [
  { name: "Week 1", TikTok: 600, Instagram: 900, Twitter: 700, LinkedIn: 400 },
  { name: "Week 2", TikTok: 750, Instagram: 1100, Twitter: 800, LinkedIn: 500 },
  { name: "Week 3", TikTok: 800, Instagram: 1200, Twitter: 900, LinkedIn: 600 },
  { name: "Week 4", TikTok: 700, Instagram: 1000, Twitter: 850, LinkedIn: 550 },
];

export default function PostsReachChart() {
  const [view, setView] = useState<"Weekly" | "Monthly">("Weekly");
  const data = view === "Weekly" ? weeklyData : monthlyData;

  return (
    <div className="bg-white rounded-xl p-6 shadow mb-6 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">Posts Reach</div>
        <div className="relative">
          <button
            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium text-sm focus:outline-none"
            onClick={() => setView(view === "Weekly" ? "Monthly" : "Weekly")}
          >
            {view} ▼
          </button>
          {/* For a real dropdown, you could use a menu here */}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TikTok" fill="#000000" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Instagram" fill="#E1306C" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Twitter" fill="#1DA1F2" radius={[8, 8, 0, 0]} />
          <Bar dataKey="LinkedIn" fill="#0077B5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
