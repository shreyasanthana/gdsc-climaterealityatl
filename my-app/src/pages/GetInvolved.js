import GetInvolvedContent from "../components/GetInvolvedContent"
import { Flex } from "@chakra-ui/react";

// import theme from "./theme";
// gdsc-climaterealityatl/my-app/src/assets

const GetInvolved = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      minHeight="100vh"
      position="relative"
      pb="120px" // for proper footer placement
    >
      <GetInvolvedContent />
    </Flex>

  )
}

export default GetInvolved