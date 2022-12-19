import React from "react";
import { HStack, Link, Flex, Text, Heading, Button, Box } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
const DonateLink = "https://www.climaterealityproject.org/donate/chapters-support-climate-reality-project-atlanta-ga";


const MenuLinks = ({ flexDirProp }) => {
  const mb = (flexDirProp === "column" ? 3 : 0);
  const mt = (flexDirProp === "column" ? 8: 0);
  const alignItems = (flexDirProp === "column" ? "left" : "center");
  const mr = (flexDirProp === "column" ? "auto": 8);

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
        <Link href={DonateLink} target="_blank">
          <Button
            mr={mr}
            mt={mt}
            variant="outline"
            textTransform="uppercase"
            border="2px"
            fontSize="lg"
            letterSpacing="1px"
            // bg="blue.700"
            _hover={{
              background:"brandGreen",
            }}
          >
            donate
            {/* <HiOutlineExternalLink size="20px" ml="30px" /> */}
          </Button>
        </Link>
      </Flex>
  )
}

export default MenuLinks;