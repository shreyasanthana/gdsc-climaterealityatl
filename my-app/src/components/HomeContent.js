import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import HomeContentText from "./HomeContentText";


// Main content below Hero image area
const HomeContent = () => {
  return (
    <Flex
      mt="40px"
      mx="20px"
    >
      {/* box containing text narrative */}
      <Box
        width="100%"  // no calendar; w/calendar=70%
      >
        <HomeContentText />
      </Box>

    </Flex>
  )
}

export default HomeContent;