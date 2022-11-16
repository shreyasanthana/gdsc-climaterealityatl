import { Box } from "@chakra-ui/react"

function EventPage() {
    return (
        <Box>
            <h1>Calendar</h1>
            <iframe src="https://calendar.google.com/calendar/embed?src=c7b707e6c9ed9e760a3805267c524c6d875a85297dab6a32a641d07f6ad36fc4%40group.calendar.google.com&ctz=America%2FNew_York" title="Upcoming Events" width="100%" height="800" frameborder="0" scrolling="no"></iframe>
        </Box>
    )
}

export default EventPage