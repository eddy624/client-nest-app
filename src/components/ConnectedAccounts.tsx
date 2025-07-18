import { FaYoutube, FaTwitter, FaInstagram, FaSyncAlt } from "react-icons/fa";

const accounts = [
  {
    name: "Youtube",
    border: "border-yellow-400",
    icon: <FaYoutube className="text-red-600" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
  {
    name: "X/Twitter",
    border: "border-purple-600",
    icon: <FaTwitter className="text-blue-400" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
  {
    name: "Instagram",
    border: "border-red-400",
    icon: <FaInstagram className="text-pink-500" />,
    subscribers: "12,345",
    comments: "4,398",
    likes: "1.12M",
  },
];

export default function ConnectedAccounts() {
  return (
    <div className="bg-white rounded-xl p-6 shadow mb-6">
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
            className={`rounded-xl border-2 ${acc.border} p-5 flex-1 min-w-[220px] flex flex-col items-start`}
          >
            <div className="flex items-center gap-2 mb-2">
              {acc.icon}
              <span className="font-semibold text-base">{acc.name}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{acc.subscribers}</div>
            <div className="text-gray-400 font-semibold mb-2">Subscribers</div>
            <hr className="w-full my-2" />
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
