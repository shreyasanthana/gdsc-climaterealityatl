import React from "react";
import { Text } from "@chakra-ui/react";
import Donation from "../components/Donation";


const TestDonation = () => {
  return (
    <div>
      <Text fontSize="2xl" mb={5}>Donation Test Page</Text>
      <Donation />
    </div>
  )
}

export default TestDonation