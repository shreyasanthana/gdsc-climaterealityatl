import React from "react";
import { HStack, Link, Flex, Text, Image, Spacer, Heading, Button, Box } from "@chakra-ui/react";
const Logo = "CRP_Atlanta_white_transp_300x90.png";


// To install heading and body fonts (which are reflected in Theme.js):
//  npm install @fontsource/lato    // substituted for nat'l website's BrandonGrotesque
//  npm install @fontsource/merriweather-sans
//  Comment: Could alternatively impor fonts as link in styles.css file


const Navbar = ({ navBgColor }) => {
  return (
    <Flex bg={navBgColor} height="100px" width="100%" alignItems="center" position="absolute" zIndex={8}>
      <Link href="/">
        <Image src={Logo} alt="logo" ml={10} w="220px" h="66px" />
      </Link>
      <Spacer />
      <Flex
        as={Heading}
        textTransform="uppercase"
        alignItems="center"
        color="white"
      >
        <Link mr={8} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/about">About</Link>
        <Link mr={8} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/events">Events</Link>
        <Link mr={8} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/getinvolved">Get Involved</Link>
        <Link mr={8} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/contact">Contact</Link>
        <Button
          mr={10}
          variant="outline"
          textTransform="uppercase"
          border="2px"
          fontSize="lg"
          letterSpacing="1px"
          _hover={{
            background:"brandGreen",
          }}
        >
            donate
          </Button>
      </Flex>
    </Flex>
  )
}

export default Navbar;