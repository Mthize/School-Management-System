"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>("work_week");

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <div style={{ height: "98vh" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleViewChange}
        min={new Date(2025, 9, 5, 8, 0, 0)}
        max={new Date(2025, 9, 5, 15, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;

