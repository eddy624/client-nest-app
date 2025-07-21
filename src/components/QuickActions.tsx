import { FaCalendarAlt, FaRobot, FaUsers, FaShareAlt, FaPlus, FaMagic, FaUserPlus, FaLink } from "react-icons/fa";

const actions = [
  {
    icon: <FaCalendarAlt className="text-2xl text-blue-600" />,
    title: "Scheduled Posts",
    subtitle: "You have 0 post scheduled after",
    main: "0 Days",
    button: (
      <span className="flex items-center gap-2"><FaPlus /> Schedule a Post</span>
    ),
    color: "blue",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    btn: "bg-blue-600 hover:bg-blue-700",
  },
  {
    icon: <FaRobot className="text-2xl text-green-600" />,
    title: "Generate with AI",
    subtitle: "Create content ideas instantly",
    main: "AI Ready",
    button: (
      <span className="flex items-center gap-2"><FaMagic /> Generate Now</span>
    ),
    color: "green",
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    btn: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: <FaUsers className="text-2xl text-yellow-600" />,
    title: "Team Collaboration",
    subtitle: "Invite your team to collaborate",
    main: "2 Members",
    button: (
      <span className="flex items-center gap-2"><FaUserPlus /> Invite Team</span>
    ),
    color: "yellow",
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    btn: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: <FaShareAlt className="text-2xl text-indigo-500" />,
    title: "Connect Social Media",
    subtitle: "Link your accounts for more reach",
    main: "3 Connected",
    button: (
      <span className="flex items-center gap-2"><FaLink /> Connect Now</span>
    ),
    color: "indigo",
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    btn: "bg-indigo-600 hover:bg-indigo-700",
  },
];

export default function QuickActions() {
  return (
    <div>
      <div className="font-semibold text-lg mb-3">Quick Actions</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-3 shadow flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.03] ${action.bg}`}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow mb-2`}>{action.icon}</div>
            <div className="font-semibold text-sm mb-0.5 text-gray-800">{action.title}</div>
            <div className="text-gray-500 text-xs mb-1">{action.subtitle}</div>
            <div className="text-lg font-bold mb-2 text-gray-900">{action.main}</div>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-xs text-white flex items-center justify-center gap-2 mt-1 shadow ${action.btn} transition`}
            >
              {action.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 