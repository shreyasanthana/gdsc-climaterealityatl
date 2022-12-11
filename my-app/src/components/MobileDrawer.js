import React from "react";
import { useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,
  DrawerContent, DrawerCloseButton, Button, Flex, Text, Spacer, Box } from "@chakra-ui/react";
import { ImMenu, ImCross } from "react-icons/im";
import MenuLinks from "./MenuLinks";

const MobileDrawer = ({ isOpen, onOpen, onClose }) => {

  return (
    <Flex>
      <Button variant="unstyled" onClick={onOpen}>
        <ImMenu size="36px" color="white" />
        <Drawer size={{ base: "full", md: "xs" }} placement="right" onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent bg="black">
            <DrawerCloseButton size="lg" color="white"/>
            <DrawerHeader>
              <Box height="69px" />
            </DrawerHeader>
            <DrawerBody color="white">
              <MenuLinks flexDirProp="column" />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Button>

    </Flex>
  )
}

export default MobileDrawer;