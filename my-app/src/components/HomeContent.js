import React from "react";
import { Box, Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";

// Main content below Hero image area
const HomeContent = () => {
  return (
    <Box
      mt="40px"
      ml="20px"
      mb="120px"  // for proper footer placement
    >
      <Text fontSize="3xl">Some text below Hero image</Text>
      <Text fontSize="3xl">Some more text below Hero image</Text>
      <Text fontSize="3xl">Even more text below Hero image</Text>
    </Box>
  )
}

export default HomeContent;