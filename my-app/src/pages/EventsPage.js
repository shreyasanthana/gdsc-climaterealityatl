import { Box } from "@chakra-ui/react";
import Calendar from "../components/Calendar";

function EventPage() {

  return (
    <Box pt={'120px'} pb={'240px'}>
      <Calendar />
    </Box>
  );
}

export default EventPage