import React from "react";
import { Text } from "@chakra-ui/react";
import MiniCalendar from "../components/MiniCalendar";


const TestMiniCalendar = () => {
  return (
    <div>
      <Text fontSize="2xl" mb={5}>TestMiniCalendar</Text>
      < MiniCalendar />
    </div>
  )
}

export default TestMiniCalendar