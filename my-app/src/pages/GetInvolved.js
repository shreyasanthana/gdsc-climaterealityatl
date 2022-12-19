import React from "react";
import { Text, Box, Container,Heading, Grid, GridItem, Stack, Link} from "@chakra-ui/react";
import { Flex, Center, Divider } from '@chakra-ui/react'
import ContactForm from "../components/ContactForm";
import GetInvolvedBackground from "../components/GetInvolvedBackground";

import secondImage from "../assets/img/GetInvolvedSecond.png";

// import theme from "./theme";
// gdsc-climaterealityatl/my-app/src/assets

const GetInvolved = () => {
  return (


    <Flex
    flexDirection="column"
    w="100%"
    minHeight="100vh"
    position="relative"
    pb="10px" // for proper footer placement
  >
  <Box pt={'0px'} pb={'240px'}> 
        {/* <Container maxW='container.sm' bg='#8DC63F' color='black' > */}


        <GetInvolvedBackground />
        
        <Stack direction={["row"]} spacing="14px">
          <Box
          // Spacing between left side
            w='10px' h='10px' bg='white'>
          </Box>

        <Stack direction={["column"]} spacing="14px">
          <Box
          // Spacing between picture at top and pictures
            w='10px' h='10px' bg='white'>
          </Box>
        <Box 
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          w = '800px'
          align = 'middle'
          padding = '20px'>
          <Text fontSize="35px" fontWeight='bold'> Getting Involved in the Atlanta Chapter</Text>
          <Text fontSize="20px"> 
            There are many ways to get involved in The Climate Reality Project! 
            Join our climate movement by becoming a part of our Atlanta Chapter using 
            the form below. You can also get involved by joining our {' '} 
            <Link fontWeight = 'bold' color='#005254' href='https://join.slack.com/t/climaterealityatlanta/shared_invite/zt-1lvv3rzlf-pPxhFF59Zv9xYwgH00_cVQ'>
              Slack 
            </Link> and following our {' '}
            <Link fontWeight = 'bold' color='#005254' href='https://www.facebook.com/climaterealityatlanta/'>
              Facebook
            </Link>, {' '}
            <Link fontWeight = 'bold' color='#005254' href='https://www.instagram.com/climaterealityatlanta/'>
              Instagram
            </Link>, or {' '}
            <Link fontWeight = 'bold' color='#005254' href='https://twitter.com/atlantaclimate'>
              Twitter
            </Link>. You can also subscribe to our mailing list on the right!

          Outside the chapter you can also become a {' '}
          <Link fontWeight = 'bold' color='#005254' href='https://www.climaterealityproject.org/training'>
              Climate Reality Leader 
          </Link>, fight for justice in your {' '}
          <Link fontWeight = 'bold' color='#005254' href='https://www.climaterealityproject.org/climatejustice/grants'>
                community
          </Link>, or request a {' '}
          <Link fontWeight = 'bold' color='#005254' href='https://climatereality.formtitan.com/PresentationRequest#/'>
                climate presentation. 
          </Link>
          </Text>
          </Box>

 {/* LOOK HERE CURRENTLY WORKING */}
          <Box 
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          w = '800px'
          // align = 'middle'
          padding = '20px'>
          <Text fontSize='20px'> Subscribe to our mailchimp here:</Text>
          {/* <NewsletterSubscribe/> */}

          </Box>


          {/* <Box 
          position = 'relative'
          borderWidth='2px'
          borderRadius='lg' 
          w = '800px'>
          <ContactForm /> 
          </Box> */}

        </Stack>

        <Box
          // Spacing between form and pictures
            w='20px' h='20px' bg='white'>
          </Box>

          <Stack direction={["column"]} spacing="14px">
          <Box
          // Spacing between picture at top and pictures
            w='10px' h='10px' bg='white'>
          </Box>

          <Box
            bgImage={secondImage}
            w='585px'
            h='300px'
            borderRadius='lg'
            borderWidth = '4px'
            bgSize='cover'
            bgPosition='center'
            position='relative'
            borderBottomLeftRadius='0px'>
          </Box>
          </Stack>
          </Stack>

          <Box
          // Spacing between form and content above
            w='10px' h='30px' bg='white'>
          </Box>

        <Container
          centerContent
          position = 'relative'
          maxW = 'contain.lg'>
          <Box
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          borderColor = '#8DC63F'
          w = '1000px'>
          <ContactForm /> 
          </Box>
        </Container>
</Box>


</Flex>



  )
}

export default GetInvolved