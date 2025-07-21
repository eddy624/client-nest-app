import { FaTimes } from "react-icons/fa";

const hashtagSuggestions = [
  { tag: "#ui", posts: "295,365", relevance: "99%" },
  { tag: "#uiux", posts: "40,678,800", relevance: "95%" },
  { tag: "#uiuxdesign", posts: "191,360", relevance: "87%" },
  { tag: "#web ui", posts: "120,760", relevance: "67%" },
  { tag: "#uitrends", posts: "102,322", relevance: "66%" },
];

export default function HashtagSuggestionModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-full flex flex-col relative border border-gray-100">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-lg">Schedule Post</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-label="Close hashtag suggestion popup">
            <FaTimes />
          </button>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex gap-2 mb-3">
            <input type="text" defaultValue="#ui" className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" aria-label="Search hashtag" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-label="Suggest hashtags">Suggest</button>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>0 Selected</span>
            <button className="text-blue-600 font-medium hover:underline focus:outline-none" aria-label="Select all hashtags">Select All</button>
          </div>
          <div className="flex items-center text-xs text-gray-400 border-b pb-1 mb-1">
            <span className="flex-1">Hashtags (30)</span>
            <span>Relevance</span>
            <span className="w-6"></span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {hashtagSuggestions.map((h) => (
              <div key={h.tag} className="flex items-center border-b last:border-b-0 py-2 group hover:bg-blue-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{h.tag}</div>
                  <div className="text-xs text-gray-400">{h.posts} posts</div>
                </div>
                <div className="w-14 text-right font-semibold text-gray-700">{h.relevance}</div>
                <input type="checkbox" className="ml-3 w-4 h-4 rounded border-gray-300" disabled aria-label={`Select ${h.tag}`} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-400 font-semibold cursor-not-allowed" aria-label="Insert hashtag">Insert Hashtag</button>
            <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-400 font-semibold cursor-not-allowed" aria-label="Done">Done</button>
          </div>
        </div>
      </div>
      <style>{`.animate-fade-in{animation:fadeIn .3s ease}`}
      {`@keyframes fadeIn{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}`}</style>
    </div>
  );
} 