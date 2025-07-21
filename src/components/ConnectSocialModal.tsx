import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr, FaInstagram, FaTiktok, FaYoutube, FaPinterest, FaTelegramPlane, FaPlus, FaTimes } from "react-icons/fa";

const socials = [
  { name: "Facebook", icon: <FaFacebookF className="text-blue-600 text-2xl" /> },
  { name: "Twitter", icon: <FaTwitter className="text-blue-400 text-2xl" /> },
  { name: "LinkedIn", icon: <FaLinkedinIn className="text-blue-700 text-2xl" /> },
  { name: "Tumblr", icon: <FaTumblr className="text-black text-2xl" /> },
  { name: "Instagram", icon: <FaInstagram className="text-pink-500 text-2xl" /> },
  { name: "TikTok", icon: <FaTiktok className="text-black text-2xl" /> },
  { name: "YouTube", icon: <FaYoutube className="text-red-600 text-2xl" /> },
  { name: "Pinterest", icon: <FaPinterest className="text-red-500 text-2xl" /> },
  { name: "Telegram", icon: <FaTelegramPlane className="text-blue-400 text-2xl" /> },
];

export default function ConnectSocialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center lg:items-start justify-center lg:justify-start bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-4 w-60 flex flex-col gap-4 relative mt-0 lg:mt-24 lg:ml-72"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <FaTimes className="w-5 h-5" />
        </button>
        <div className="font-bold text-xl mb-4 text-indigo-700 text-center">Connect Social Media</div>
        <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-80">
          {socials.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2 p-2 rounded-xl border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow">
                {s.icon}
              </div>
              <span className="font-medium text-gray-700 text-xs text-center">{s.name}</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 text-white shadow transition">
                <FaPlus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 