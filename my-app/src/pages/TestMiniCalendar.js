import React from "react";
import { Text } from "@chakra-ui/react";
import MiniCalendar from "../components/MiniCalendar";


// Temporary page to test MiniCalendar component
const TestMiniCalendar = () => {
  return (
    <div>
      <Text fontSize="2xl" mb={5}>MiniCalendar Test Page</Text>
      < MiniCalendar />
    </div>
  )
}

export default TestMiniCalendar