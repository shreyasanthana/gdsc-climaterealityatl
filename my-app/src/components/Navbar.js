import React from "react";
import { HStack, Link, Flex, Text, Image, Spacer, Heading, Button, Box } from "@chakra-ui/react";
import MobileDrawer from "./MobileDrawer";
import MenuLinks from "./MenuLinks";
const Logo = "CRP_Atlanta_white_transp_300x90.png";


// To install heading and body fonts (which are reflected in Theme.js):
//  npm install @fontsource/lato    // substituted for nat'l website's BrandonGrotesque
//  npm install @fontsource/merriweather-sans
//  Comment: Could alternatively impor fonts as link in styles.css file


const Navbar = ({ navBgColor }) => {
  return (
    <Flex
      bg={navBgColor}
      position="absolute"
      height="100px"
      width="100%"
      alignItems="center"
      zIndex={10}
    >
      <Link
        href="/"
      >
        <Image src={Logo} alt="logo" ml={10} minW="220px" h="66px" />
      </Link>
      <Spacer />
      <Flex display={{ base: "none", lg: "flex" }}>
        <MenuLinks flexDirProp="row" />
      </Flex>
      <Flex display={{ base: "flex", lg: "none" }} mr={8}>
        <MobileDrawer />
      </Flex>
    </Flex>
  )
}

export default Navbar;