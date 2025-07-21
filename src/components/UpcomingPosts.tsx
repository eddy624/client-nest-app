import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const posts = [
  {
    id: 1,
    date: "15 July 2025",
    title: "Birthday Vlog",
    content: "Another year added on this great day....",
    color: "bg-orange-200",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "Scheduled",
    platforms: [<FaInstagram className="text-pink-500" />, <FaTwitter className="text-blue-400" />],
  },
  {
    id: 2,
    date: "16 July 2025",
    title: "Product Launch",
    content: "Excited to announce our new product line! 🚀",
    color: "bg-blue-200",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "Draft",
    platforms: [<FaYoutube className="text-red-600" />, <FaLinkedin className="text-blue-700" />],
  },
  {
    id: 3,
    date: "17 July 2025",
    title: "Team Outing",
    content: "Fun times with the team at the annual retreat!",
    color: "bg-purple-200",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    status: "Scheduled",
    platforms: [<FaInstagram className="text-pink-500" />],
  },
];

const borderColors = [
  "border-indigo-400",
  "border-pink-400",
  "border-green-400",
  "border-yellow-400",
  "border-purple-400",
];

export default function UpcomingPosts() {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold text-lg mb-4">Upcoming Posts</div>
      {posts.map((post, idx) => (
        <div
          key={post.id}
          className={`rounded-xl bg-white p-4 flex items-center gap-4 shadow border-2 ${borderColors[idx % borderColors.length]}`}
        >
          <img
            src={post.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-xs text-gray-500">{post.date}</div>
            <div className="font-semibold">{post.title}</div>
            <div className="font-bold text-sm mt-1">{post.content}</div>
            <div className="flex gap-2 mt-2">
              {post.platforms.map((icon, idx) => (
                <span key={idx} className="text-lg">{icon}</span>
              ))}
            </div>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded font-semibold ${
              post.status === "Scheduled"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {post.status}
          </span>
        </div>
      ))}
    </div>
  );
}
