import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Hero from "../components/Hero";

// Temporary page to test Hero component
const TestHero = () => {
  return (
    <Box>
      <Text position="relative" ml="10px" top="120px" fontSize="3xl" fontWeight="bold">
        Hero Test Page
      </Text>
      <Hero />
    </Box>
  )
}

export default TestHero;