import React from "react";
import { Text, Box, Container, Flex, Stack, Link } from "@chakra-ui/react";
import GetInvolvedForm from "./GetInvolvedForm";
import GetInvolvedBackground from "../components/GetInvolvedBackground";
import SubscribeComponent from "../components/SubscribeComponent"

import secondImage from "../assets/img/GetInvolvedSecond.png";


const GetInvolvedContent= () => {
  return (
    <Flex
    flexDirection="column"
    w="100%"
    minHeight="100vh"
    position="relative"
    pb="10px" // for proper footer placement
  >
  <Box 
  pt={'4px'} pb={'240px'}> 
        <GetInvolvedBackground />
        
        <Stack direction={{base:"column", lg: "row"}} spacing="14px">
          <Box
          // Spacing between left side
            w='10px' h='10px' bg='white'>
          </Box>

        <Stack direction={["column"]} spacing="14px">
          <Box
          // Spacing between picture at top and group picture
            w='10px' h='10px' bg='white'>
          </Box>
        <Box 
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          w = {{ sm: '665px', md: '750px', lg: '1145px', xl: "1120px"}}
          align = 'middle'
          borderColor = '#8DC63F' 
          padding = '20px'>
          <Text fontSize={{ base: '24px', md: '30px', lg: '35px' }}fontWeight='bold'> Getting Involved in the Atlanta Chapter</Text>
          <Text fontSize={{ base: '15px', md: '18px', lg: '20px' }}>  
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
            </Link>. You can also subscribe to our mailing list on the below!

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

          <Box 
          position = 'relative'
          borderWidth='4px'
          borderColor = '#8DC63F'
          borderRadius='lg' 
          w = {{ sm: '665px', md: '750px', lg: '1145px', xl: "1120px"}}
          h = '100px'
          // align = 'middle'
          padding = '10px'
          >
         
          <SubscribeComponent />
          </Box>

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
            // w = {{ base: '100%', md: '50%', lg: '25%' }}
            // h = {{ base: '100%', md: '50%', lg: '25%' }}

            w = {{ base: '665px', md: '730px', lg: '770px' }}
            h = {{ base: '300px', md: '300px', lg: '400px' }}

            // w='685px'
            // h='400px'
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

        {/* Formatting Join the Climate Reality Atlanta Chapter Form */}
        <Container
          centerContent
          position = 'relative'
          maxW = 'contain.lg'>
          <Box
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          borderColor = '#8DC63F'
          w = {{ sm: '665px', md: '750px', lg: '1145px', xl: "1120px"}}
          h = '1000px'
          >
          <GetInvolvedForm /> 
          </Box>
        </Container>
</Box>
</Flex>


  )
}

export default GetInvolvedContent;