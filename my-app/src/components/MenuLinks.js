import React from "react";
import DonationModal from "./DonationModal"
import { HStack, Link, Flex, Text, Heading, Button, Box } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
const DonateLink = "https://www.climaterealityproject.org/donate/chapters-support-climate-reality-project-atlanta-ga";


const MenuLinks = ({ flexDirProp }) => {
  const mb = (flexDirProp === "column" ? 3 : 0);
  const mt = (flexDirProp === "column" ? 8: 0);
  const alignItems = (flexDirProp === "column" ? "left" : "center");
  const mr = (flexDirProp === "column" ? "auto" : 8);
  const mbBut = (flexDirProp === "column"? 0 : "1px")

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
        {/* <Link href={DonateLink} isExternal style={{textDecoration:"none"}}>
          <Button
            mr={mr}
            mt={mt}
            mb={mbBut}
            variant="outline"
            border="2px"
            bg="gray.600"
            _hover={{
              background:"brandGreen",
            }}
          >
            <Heading fontSize="lg" letterSpacing="1px" textTransform="uppercase" mr="5px">donate</Heading>
            <HiOutlineExternalLink size="22px" />
          </Button>
        </Link> */}
        <DonationModal />
      </Flex>
  )
}

export default MenuLinks;