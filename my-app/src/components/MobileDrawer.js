import React from "react";
import { useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,
  DrawerContent, DrawerCloseButton, Button, Flex, Text } from "@chakra-ui/react";
import { ImMenu, ImCross } from "react-icons/im";
import MenuLinks from "./MenuLinks";

const MobileDrawer = ({ isOpen, onOpen, onClose }) => {
  // const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button variant="unstyled" onClick={onOpen}>
        <ImMenu size="36px" color="white" />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} display={{ base: "flex", lg: "none" }}>
          <DrawerOverlay />
          <DrawerContent bg="black">
            <DrawerCloseButton size="lg" color="white"/>
            <DrawerHeader justify="right">
              <Flex display="flex" height="69px" alignItems="center" justifyContent="right">
                {/* <Button variant="unstyled" onClick={onClose}>
                  <ImCross size="26px" color="white" />
                </Button> */}
              </Flex>
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