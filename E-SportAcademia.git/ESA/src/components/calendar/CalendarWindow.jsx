import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

// const locales = {
//   de: "de",
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 9, 1),
    end: new Date(2023, 9, 1),
  },
  {
    title: "Vacation",
    start: new Date(2023, 9, 1),
    end: new Date(2023, 9, 19),
  },
  {
    title: "Conferenz",
    start: new Date(2023, 12, 1),
    end: new Date(2023, 12, 1),
  },
];

const CalendarWindow = () => {
  return (
    <div>
      {/* <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      /> */}
    </div>
  );
};

export default CalendarWindow;
