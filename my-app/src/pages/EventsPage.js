import { Box } from "@chakra-ui/react";
import "./cal.css";

function EventPage() {

    return (
      <Box>
        <div className="calendar">
          <h1 className="cal-head">Calendar Events</h1>
          <iframe
            title="Upcoming Events"
            src="https://calendar.google.com/calendar/embed?src=c7b707e6c9ed9e760a3805267c524c6d875a85297dab6a32a641d07f6ad36fc4%40group.calendar.google.com&ctz=America%2FNew_York"
            width="600"
            height="800"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </Box>
    );
}

export default EventPage