import React from "react";
import { Text, Heading, Box, Image, Spacer, Flex, Link } from "@chakra-ui/react";
const heroImage = "pexels-kelly-4320481.jpg";

const Hero = () => {
  return (
    <Box>
      {/* Purpose of gradient is to make white navbar elements more visible */}
      <Box
        w='100%'
        h='200px'
        bgGradient='linear(to-b, blue.200, transparent)'
        position="absolute"
        top="0px"
        opacity="0.5"
      />
      <Box>
        <Flex flexDirection="column" position="relative">
          <Image
            width="100%"
            height="600px"
            src={heroImage}
            top="0"
            objectFit="cover"
          />
          <Text color="white" fontSize="medium" position="absolute" bottom="0px" alignSelf="end" mr={2}>
            Photo of solar farm in Rossville, GA by <Link href="https://www.instagram.com/kellymlacy/" target="_blank" textDecoration="underline">Kelly</Link> via <Link href="https://www.pexels.com" target="_blank" textDecoration="underline">Pexels.com</Link>
          </Text>
        </Flex>

        <Flex
          width={{ base: "100%", lg: "70%" }}
          position="absolute"
          top={{ base: "350px", lg: "400px" }}
          pl={{ base: "20px", lg: "50px" }}
        >
          <Text color="white" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} fontWeight="bold" lineHeight="1.0" pr="20px">As a community chapter of  <Link color="yellow.300" fontWeight="bold" _hover={{ color:"brandGreen" }} href="https://www.climaterealityproject.org/" isExternal>The Climate Reality Project</Link> founded by former Vice President Al Gore, we play a crucial role in promoting clean, efficient, and sustainable energy consumption and transportation practices right here in Atlanta. </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Hero;