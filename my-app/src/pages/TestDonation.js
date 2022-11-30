import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Donation from "../components/Donation";


const TestDonation = () => {
  return (
    <Box>
      <Text position="relative" ml="10px" top="120px" fontSize="3xl" fontWeight="bold">
        Tooni's Donation Test Page
      </Text>
      <Donation />
    </Box>
  )
}

export default TestDonation