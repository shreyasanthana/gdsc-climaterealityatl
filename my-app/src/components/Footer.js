import React from "react";
import { Text, Box } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box
      bg="black"
      position="absolute"
      bottom="0"
      width="100%"
      height="120px"
    >
      <Text ml="10px" mt="5px" fontSize="xl" color="white">
        Footer Test
      </Text>
    </Box>
  )
}

export default Footer;