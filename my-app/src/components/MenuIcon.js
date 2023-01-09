import React from "react";
import { useDisclosure, Button, Flex } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

const MenuIcon = () => {
  const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button variant="unstyled" onClick={onOpen}>
        <IoMdMenu size="36px" color="white"/>
      </Button>

    </Flex>
  )
}

export default MenuIcon;