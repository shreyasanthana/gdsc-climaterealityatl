import React from "react";
import { HStack, Link, Text } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <div>
     <HStack spacing="48px" mt={2} mb={5}>
        <Link href="/">
          <Text as="u" color="blue">Home</Text>
        </Link>
         <Link href="/testhome">
          <Text as="u" color="blue">Home Test Page</Text>
        </Link>
        <Link href="/testhero">
          <Text as="u" color="blue">Hero Test Page</Text>
        </Link>
        <Link href="/testminicalendar">
          <Text as="u" color="blue">MiniCalendar Test Page</Text>
        </Link>
         <Link href="/testdonation">
          <Text as="u" color="blue">Donation Test Page</Text>
        </Link>
      </HStack>
    </div>
  )
}

export default Navbar