import React from "react";
import { Text, Heading, Box, Image, Spacer, Flex } from "@chakra-ui/react";
const heroImage = "pexels-kelly-4320481.jpg";

const Hero = () => {
  return (
    <Box>
      <Box
        w='100%'
        h='200px'
        bgGradient='linear(to-b, blue.200, transparent)'
        position="absolute"
        top="0px"
        opacity="0.5"
      />
      <Box>
        <Image
          width="100%"
          height="600px"
          src={heroImage}
          top="0"
          objectFit="cover"
        />
        <Flex
          flexDirection="column"
          position="absolute"
          top="390px"
          left="150px"
          gap="10px"
        >
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Some text inside Hero</Text>
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Some more text inside Hero</Text>
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Even more text inside Hero</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero;