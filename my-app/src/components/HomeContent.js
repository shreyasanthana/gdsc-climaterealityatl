import React from "react";
import { Box, Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";
import HomeContentText from "./HomeContentText";
import HomeCalendar from "./HomeCalendar";


// Main content below Hero image area
const HomeContent = () => {
  return (
    <Flex
      mt="40px"
      mx="20px"
      mb="120px"  // for proper footer placement
      gap="80px" // spacing between text and calendar component
    >

      {/* box containing text narrative */}
      <Box
        width="70%"
        border="1px"  // TODO: remove
      >
        <HomeContentText />
      </Box>

      {/* box containing embedded responsive mini Calendar */}
      <Box
        width="30%"
        border="2px"  // TODO: possibly remove
      >
        <HomeCalendar />
      </Box>
    </Flex>
  )
}

export default HomeContent;