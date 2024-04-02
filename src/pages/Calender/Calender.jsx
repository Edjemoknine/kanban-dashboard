import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";
import useStore from "../../context/calender";
import { createEventId } from "../../data";
const Calender = () => {
  const { currentEvents, setCurrentEvents } = useStore();
  const handleEvent = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = async (selected) => {
    let title = prompt("Please enter a title");
    let calenderApi = selected.view.calendar;

    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: createEventId(),
        title,
        start: selected.start,
        end: selected.end,
        allDay: selected.allDay,
      });
    }
  };
  const handleClickEvent = (click) => {
    if (confirm("Are you sure you want to delete event")) {
      click.event.remove();
    }
  };
  return (
    <div className="calendar-container">
      <div>
        <FullCalender
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev, next, today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvent}
          select={handleDateSelect}
          eventClick={handleClickEvent}
        />
      </div>
    </div>
  );
};

export default Calender;
