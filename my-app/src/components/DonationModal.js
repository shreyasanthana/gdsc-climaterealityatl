import React from "react";
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Heading, Link, Flex } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
const DonateLink = "https://www.climaterealityproject.org/donate/chapters-support-climate-reality-project-atlanta-ga";


const DonationModal = ({ flexDirProp }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const mb = (flexDirProp === "column" ? 3 : 0);
  const mt = (flexDirProp === "column" ? 8: 0);
  const alignItems = (flexDirProp === "column" ? "left" : "center");
  const mr = (flexDirProp === "column" ? "auto" : 8);
  const mbBut = (flexDirProp === "column"? 0 : "3px")

  return (
    <div>
      <Button
        onClick={onOpen}
        mr={mr}
        mt={mt}
        mb={mbBut}
        variant="outline"
        border="2px"
        bg="#194173"
        _hover={{
          background:"brandGreen",
        }}>
        <Heading fontSize="lg" letterSpacing="1px" textTransform="uppercase" mr="5px">donate</Heading>
              <HiOutlineExternalLink size="22px" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalHeader>
            Make a Donation
          </ModalHeader>
          
          <ModalCloseButton />
          
          <ModalBody>
            <Text fontSize="lg">
              By clicking the 'Continue' button, you will be taken to a new browser tab or window for the national website where you can donate to the Atlanta chapter and help local activists protect our planet, fight back against the climate crisis, and make our community a safer, healthier place for families. Return to our chapter website afterwards by closing the tab or window.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Flex flexDirection="column">
              <Flex justifyContent="end">
                <Button variant="ghost" mr={3} onClick={onClose}>
                  <Heading size="8px" fontWeight="100" style={{textDecoration: "underline"}}>Cancel</Heading>
                </Button>
                <a href={DonateLink} target="_blank">
                  <Button colorScheme="blue" onClick={onClose}>
                    Continue
                  </Button>
                </a>
              </Flex>
              <Text fontSize="sm" mt={8}>
                The Alliance for Climate Protection d/b/a The Climate Reality Project is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.
              </Text>
            </Flex>  
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default DonationModal;