import { FaYoutube, FaTwitter, FaInstagram, FaSyncAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const accounts = [
  {
    name: "Youtube",
    bg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    icon: <FaYoutube className="text-3xl text-red-600" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
  {
    name: "X/Twitter",
    bg: "bg-gradient-to-br from-blue-100 to-purple-100",
    icon: <FaTwitter className="text-3xl text-blue-400" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
  {
    name: "Instagram",
    bg: "bg-gradient-to-br from-pink-100 to-red-100",
    icon: <FaInstagram className="text-3xl text-pink-500" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
  {
    name: "LinkedIn",
    bg: "bg-gradient-to-br from-blue-100 to-blue-200",
    icon: <FaLinkedin className="text-3xl text-blue-700" />,
    subscribers: "8,765",
    comments: "2,134",
    likes: "789K",
  },
];

export default function ConnectedAccounts() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-lg">Connected Accounts</div>
        <button className="flex items-center gap-1 text-gray-500 text-sm hover:text-indigo-600">
          <span>Refresh 10 secs ago</span>
          <FaSyncAlt className="ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {accounts.map((acc) => (
          <div
            key={acc.name}
            className={`flex-1 min-w-[220px] flex flex-col items-start p-4 rounded-xl ${acc.bg} transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer`}
          >
            <div className="flex items-center gap-2 mb-2">
              {acc.icon}
              <span className="font-semibold text-base text-gray-800">{acc.name}</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-900">{acc.subscribers}</div>
            <div className="text-gray-500 font-semibold mb-2">Subscribers</div>
            <hr className="w-full my-2 border-gray-300" />
            <div className="flex w-full justify-between text-sm">
              <div>
                <div className="text-gray-400">Comments</div>
                <div className="font-semibold">{acc.comments}</div>
              </div>
              <div>
                <div className="text-gray-400">Likes</div>
                <div className="font-semibold">{acc.likes}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
