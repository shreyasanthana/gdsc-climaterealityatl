import React from "react";
import { HStack, Link, Flex, Text, Image, Spacer, Heading } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Logo = "CRP_Atlanta_white_transp_300x90.png";
const DonateLink = "https://www.climaterealityproject.org/donate/chapters-support-climate-reality-project-atlanta-ga";

const Footer = () => {
  return (
    <Flex bg="black" width="100%" justifyContent="center">
      <Flex flexDirection="column" width={{ base: "100%", md: "80%" }} mx="20px" my={5}>
        <Flex>
          <Flex flexDirection="column" width="50%">
            <Image src={Logo} alt="logo" maxWidth="170px"/>
            <Flex color="white" width="170px" justifyContent="space-between" mt={5}>

              <Link href="https://www.facebook.com/climaterealityatlanta/" isExternal target="_blank">
                <FaFacebookSquare size="22px"/>
              </Link>

              <Link href="https://www.instagram.com/climaterealityatlanta/" isExternal target="_blank">
                <FaInstagram size="22px"/>
              </Link>

              <Link href="https://www.linkedin.com/company/the-climate-reality-project-atlanta-chapter/" isExternal target="_blank">
                <FaLinkedin size="22px"/>
              </Link>

              <Link href="https://twitter.com/AtlantaClimate" isExternal target="_blank">
                <FaTwitter size="22px"/>
              </Link>

              <Link href="https://www.youtube.com/channel/UCFzCpGNisa8Pixgs-GEBuGg" isExternal target="_blank">
                <FaYoutube size="22px"/>
              </Link>

            </Flex>
          </Flex>

          <Flex flexDirection="column" as={Heading} width="50%" ml={8} gap={3}>
            <Link fontSize="12pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/about">About Us</Link>
            <Link fontSize="12pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/events">Events</Link>
            <Link fontSize="12pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/getInvolved">Get Involved</Link>
            <Link fontSize="12pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href="/getinvolved">Contact Us</Link>
            <Flex>
              <Flex align="center" as={Link} fontSize="12pt" letterSpacing="1px" color="white" _hover={{ color: "brandGreen" }} href={DonateLink} isExternal style={{textDecoration: "none"}}>
                Donate
                <Spacer width="6px" />
                <HiOutlineExternalLink size="20px" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* *** Copyright info ON HOLD pending clarification of legal entity status; based on GA Div of Corp search, local chapter is not a legal entity formed under the laws of state nor independently an organation under Section 501(c)(3) of the IRC *** */}
        {/* <Flex flexDirection="column" justifyContent="end" px={10}>
          <Text fontSize="12pt" color="gray.100" textAlign="right">© 2022 The Climate Reality Project:</Text>
          <Text fontSize="12pt" color="white" textAlign="right">Atlanta, GA chapter</Text>
        </Flex> */}

      </Flex>
    </Flex>
  )
}

export default Footer;