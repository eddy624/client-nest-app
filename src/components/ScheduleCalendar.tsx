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
    <div className="bg-white rounded-xl p-6 shadow mb-6">
      <div className="font-semibold mb-2">Schedule Calendar</div>
      <Calendar
        onChange={handleChange}
        value={value}
        className="border-0"
        tileClassName={({ date, view }) => {
          const isToday = date.toDateString() === new Date().toDateString();
          if (isToday) {
            return "bg-indigo-100 text-indigo-700 font-bold";
          }
          return undefined;
        }}
        tileContent={({ date, view }) =>
          view === "month" && isScheduled(date) ? (
            <div className="flex justify-center items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-1"></span>
            </div>
          ) : null
        }
        prevLabel="‹"
        nextLabel="›"
        prev2Label={null}
        next2Label={null}
      />
      <div className="mt-4 text-xs text-gray-500">
        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
        Scheduled Post
      </div>
    </div>
  );
}
