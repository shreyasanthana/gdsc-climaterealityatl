import React from "react";
import { Text, Heading, Box, Image, Spacer, Flex } from "@chakra-ui/react";
import getInvolvedImg from "../assets/img/GetInvolved.png";

const GetInvolvedBackground = () => {
  return (
    <Box>
      <Box
        w='50%'
        h='200px'
        position="absolute"
        top="0px"
        opacity="0.5"
      />
      <Box>
        <Image
          width="100%"
          height="500px"
          src={getInvolvedImg}
          top="0"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}

export default GetInvolvedBackground;