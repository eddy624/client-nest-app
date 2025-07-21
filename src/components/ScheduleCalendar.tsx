import { useState } from "react";
import Calendar from "react-calendar";
import type { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Example: Dates with scheduled posts
const scheduledDates = [
  new Date(2024, 6, 18), // July 18, 2024
  new Date(2024, 6, 20),
  new Date(2024, 6, 25),
];

// Use the correct value type from CalendarProps
type CalendarValue = NonNullable<CalendarProps["value"]>;

export default function ScheduleCalendar() {
  const [value, setValue] = useState<CalendarValue>(new Date());

  // Helper to check if a date is in scheduledDates
  const isScheduled = (date: Date) =>
    scheduledDates.some(
      (d) =>
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );

  // Explicitly type the handler to match Calendar's onChange
  const handleChange: CalendarProps["onChange"] = (nextValue) => {
    setValue(nextValue as CalendarValue);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white rounded-xl shadow-lg p-4">
      <div className="font-bold mb-3 text-indigo-700 text-lg flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></span>
        Schedule Calendar
      </div>
      <Calendar
        onChange={handleChange}
        value={value}
        className="border-0 !bg-transparent !shadow-none"
        tileClassName={({ date, view }) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const scheduled = isScheduled(date);
          let classes = "transition duration-150";
          if (isToday) {
            classes += " bg-indigo-200 text-indigo-800 font-bold border-2 border-indigo-400";
          }
          if (scheduled) {
            classes += " ring-2 ring-indigo-400 bg-indigo-50 text-indigo-700 font-semibold";
          }
          classes += " hover:bg-indigo-100 hover:text-indigo-900 cursor-pointer rounded-lg";
          return classes;
        }}
        tileContent={({ date, view }) =>
          view === "month" && isScheduled(date) ? (
            <div className="flex justify-center items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-1 animate-bounce"></span>
            </div>
          ) : null
        }
        prevLabel="‹"
        nextLabel="›"
        prev2Label={null}
        next2Label={null}
      />
      <div className="mt-4 text-xs text-indigo-600 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
        Scheduled Post
      </div>
    </div>
  );
}
