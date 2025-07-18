

const stats = [
  {
    label: "Total Followers",
    value: "12,345",
    change: "+2% from last month",
    color: "border-indigo-400",
    text: "text-indigo-600",
  },
  {
    label: "Engagement Rate",
    value: "4.5%",
    change: "-1% from last month",
    color: "border-pink-400",
    text: "text-pink-600",
  },
  {
    label: "Total Impressions",
    value: "67,890",
    change: "+3% from last month",
    color: "border-green-400",
    text: "text-green-600",
  },
  {
    label: "Scheduled Automation",
    value: "15",
    change: "+5 from last month",
    color: "border-yellow-400",
    text: "text-yellow-600",
  },
  {
    label: "Posts Scheduled",
    value: "20",
    change: "+2 from last month",
    color: "border-purple-400",
    text: "text-purple-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-white rounded-xl p-4 border-t-4 ${stat.color} shadow flex flex-col`}
        >
          <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className={`text-xs font-semibold ${stat.text}`}>{stat.change}</div>
        </div>
      ))}
    </div>
  );
}
