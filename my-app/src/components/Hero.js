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
        zIndex={8}
      />
      <Box>
        <Image
          width="100%"
          height="600px"
          src={heroImage}
          top="0"
          objectFit="cover"
          zIndex={6}
        />
        <Flex
          flexDirection="column"
          position="absolute"
          top="390px"
          left="150px"
          gap="10px"
          zIndex={9}
        >
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Some text</Text>
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Some more text</Text>
          <Text color="yellow" fontSize="4xl" fontWeight="bold">Even more text</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero;