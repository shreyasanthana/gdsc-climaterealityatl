import React from "react";
import { Text } from "@chakra-ui/react";
import Hero from "../components/Hero";

// Temporary page to test Hero component
const TestHero = () => {
  return (
    <div>
      <Text fontSize="2xl" mb={5}>Hero Test Page</Text>
      <Hero />
    </div>
  )
}

export default TestHero