import React from "react";
import DonationModal from "./DonationModal"
import { Link, Flex, Heading } from "@chakra-ui/react";

const MenuLinks = ({ flexDirProp }) => {
  const mb = (flexDirProp === "column" ? 3 : 0);
  const alignItems = (flexDirProp === "column" ? "left" : "center");
  const mr = (flexDirProp === "column" ? "auto" : 8);

  return (
    <Flex
        as={Heading}
        textTransform="uppercase"
        alignItems={alignItems}
        color="white"
        flexDirection={flexDirProp}
      >
        <Link mr={mr} mb={mb} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/about">About</Link>
        <Link mr={mr} mb={mb} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/events">Events</Link>
        <Link mr={mr} mb={mb} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/getinvolved">Get Involved</Link>
        <Link mr={mr} mb={mb} fontSize="lg" letterSpacing="1px" _hover={{ color:"brandGreen" }} href="/contact">Contact</Link>
        <DonationModal flexDirProp={flexDirProp} />
      </Flex>
  )
}

export default MenuLinks;