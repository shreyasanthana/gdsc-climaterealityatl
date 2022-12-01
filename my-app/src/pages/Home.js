import React from "react";
import { Text, Heading, Box, Image, Spacer, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
const heroImage = "pexels-kelly-4320481.jpg";


const Home = () => {
  return (
    <Flex flexDirection="column">
      <Box
        w='100%'
        h='200px'
        bgGradient='linear(to-b, blue.800, transparent)'
        position="fixed"
        opacity="0.5"
        zIndex={5} />
      <Box>
        <Image
          width="100%"
          height="600px"
          src={heroImage}
          position="absolute"
          objectFit="cover"
          zIndex={3}/>
          <Flex flexDirection="column" position="relative" mt="390px" ml="150px" gap="10px" zIndex={9}>
            <Text color="white" fontSize="4xl" fontWeight="bold">Some text</Text>
            <Text color="white" fontSize="4xl" fontWeight="bold">Some more text</Text>
            <Text color="white" fontSize="4xl" fontWeight="bold">Even more text</Text>
          </Flex>
        {/* <Heading>Heading font is Lato</Heading>
        <Text fontSize="2xl" mb={5}>Text font is Merriweather.</Text>
      <Text fontSize="3xl">Some text</Text>
      <Text fontSize="3xl">Some more text</Text>
      <Text fontSize="3xl">Even more text</Text> */}
      </Box>
      <Box mt="40px" zIndex={9}>
        <Text fontSize="3xl">Some text below</Text>
        <Text fontSize="3xl">Some more text below</Text>
        <Text fontSize="3xl">Even more text below</Text>
      </Box>
      <Box bg="black" height="150px" mt="30px">
        <Footer />
      </Box>
    </Flex>
  )
}

export default Home