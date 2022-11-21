import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  ButtonGroup,
  HStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Image } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
          <HStack>
          <Link href='https://www.facebook.com/climaterealityatlanta/?adlt=strict&toWww=1&redig=872E28AC83D4450583E9650CF96664C8' isExternal>
            <Button boxShadow='dark-lg' colorScheme='facebook' leftIcon={<FaFacebook />}>
              Facebook
              </Button>
            </Link>
            <Link href='https://twitter.com/atlantaclimate?adlt=strict&toWww=1&redig=7AECA21B9E8647D2A7E2F4D1FE43CE0E' isExternal>
            <Button boxShadow='dark-lg' colorScheme='twitter' leftIcon={<FaTwitter/>}>
                Button
              </Button>
            </Link>
            <Link href='https://www.instagram.com/climaterealityatlanta' isExternal>
            <Button boxShadow='dark-lg' colorScheme='pink' leftIcon={<FaInstagram/>}>
              Instagram
            </Button>
            </Link>
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
