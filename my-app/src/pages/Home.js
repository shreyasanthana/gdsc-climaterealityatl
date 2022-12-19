import React from "react";
import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";


const Home = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      minHeight="100vh"
      position="relative"
      pb="40px" // for proper footer placement
    >
      <Hero />
      <HomeContent />
    </Flex>
  )
}

export default Home