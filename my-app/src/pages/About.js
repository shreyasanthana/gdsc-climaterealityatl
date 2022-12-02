import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box id="page-container"
      // w="100%"
      minHeight="100vh"
      position="relative"
    >
      <Box id="content-wrap"
        pb="120px"
      >
        <Text
          pt="120px"
          pl="20px"
          fontSize="3xl"
          fontWeight="bold"
          color="black"
          // h="600px"
        >
          About
          <br />
          Some text
          <br />
          More text
          <br />
          And more text
          <br />
          Even more text
          <br />
          Just taking up some room
        </Text>
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}

export default About;