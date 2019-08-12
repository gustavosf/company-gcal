import React from "react";
import PropTypes from "prop-types";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = ({ events }) => (
  <BigCalendar
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    events={events}
    style={{ height: "100vh" }}
  />
);

Calendar.propTypes = {
  events: PropTypes.array
};

export default Calendar;
