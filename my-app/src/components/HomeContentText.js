import React from "react";
import { Box, Flex, Heading, Text, Spacer, Link } from "@chakra-ui/react";


const HomeContentText = () => {
  return (
    <Flex flexDirection="column" width={{ base: "100%", md: "80%" }} alignContent="center" mx="auto">
      <Flex width="100%" bg="#ccc" height="100px" justifyContent="center" alignItems="center">
        <Heading fontSize="2xl" letterSpacing="3px">
          TAKE ACTION
        </Heading >
      </Flex>
      <Flex flexDirection={{ base: "column", lg: "row" }} lineHeight={1} py="20px" px="10px">
        <Flex width={{ base:"100%", lg:"75%" }} mr="50px" mb="50px">
          <Text fontSize="2xl">
            Please join our cause at the Atlanta chapter of The Climate Reality Project, where we are committed to investing our expertise and resources to further achieve a more sustainable, clean, and equitable Atlanta. <Link color="#194173" fontWeight="bold" _hover={{ color:"brandGreen" }} href="/getinvolved">Get involved</Link> with one of our upcoming <Link color="#194173" fontWeight="bold" _hover={{ color:"brandGreen" }} href="/events">events</Link>. Consider making a <Link color="#194173" fontWeight="bold" _hover={{ color:"brandGreen" }} href="/donation">donation</Link>. You too can make a real difference.
          </Text>
        </Flex>
        <Spacer />
        <Flex minWidth="300px">
          <Box width="20px" bg="brandGreen">
          </Box>
          <Flex flexDirection="column" ml="20px" width="100%">
            <Heading fontSize="xl" letterSpacing="1px">MAKING A</Heading>
            <Heading mb={3} fontSize="xl" letterSpacing="1px">DIFFERENCE</Heading>
            <Text fontSize="xl">is local.</Text>
            <Text fontSize="xl">is personal.</Text>
            <Text fontSize="xl">is empowering.</Text>
            <Text fontSize="xl">starts with people like you.</Text>
          </Flex>
        </Flex>


      </Flex>
    </Flex>

  )
}

export default HomeContentText;