import React from "react";
import { HStack, Link, Flex, Text, Image, Spacer, Heading, Button, Box, DefaultIcon, IconButton, VStack } from "@chakra-ui/react";
const Logo = "CRP_Atlanta_white_transp_300x90.png";


const Footer = () => {
  return (
    <Box
      bg="black"
      position="absolute"
      bottom="0"
      width="100%"
      height="200px"
    >
      <Image src={Logo} alt="logo" ml={5} mt={5} mb={5} minW="150px" h="50px" />
      <VStack>


        <HStack >
          
          <Link mr={0} fontSize="10pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/about">About Us</Link>
          <Link mr={0} fontSize="10pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/Donate">Donate</Link>
        </HStack>

        <HStack>
          <Link mr={0} fontSize="10pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/about">Contact Us</Link>
          <Text
            fontSize="10pt"
            fontWeight="bold"
            color="white"
          >|</Text>
          <Link mr={8} fontSize="10pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/events">Privacy Policy</Link>
          <Text
            fontSize="10pt"
            fontWeight="bold"
            color="white"
          >|</Text>
          <Link mr={8} fontSize="10pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/getinvolved">Terms of Use</Link>
        </HStack>

      </VStack>
    </Box>
  )
}

export default Footer;