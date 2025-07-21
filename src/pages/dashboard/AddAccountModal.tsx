import { FaTimes, FaPlus, FaSnapchat, FaVideo, FaImage } from "react-icons/fa";
import { SiVsco, SiCanva, SiAdobe } from "react-icons/si";

const editingTools = [
  { name: "Snapchat", icon: <FaSnapchat className="text-yellow-400 text-2xl" /> },
  { name: "CapCut", icon: <FaVideo className="text-black text-2xl" /> },
  { name: "Inshot", icon: <FaImage className="text-red-500 text-2xl" /> },
  { name: "VSCO", icon: <SiVsco className="text-black text-2xl" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400 text-2xl" /> },
  { name: "Adobe Express", icon: <SiAdobe className="text-red-600 text-2xl" /> },
];

export default function AddAccountModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-80 flex flex-col gap-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">Add Another Account</div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {editingTools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-4 p-2 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow">
                {tool.icon}
              </div>
              <span className="flex-1 font-medium text-gray-700">{tool.name}</span>
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