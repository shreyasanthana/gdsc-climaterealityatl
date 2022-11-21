import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Textarea } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        
        <Grid minH="100vh" p={3} templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={2}>
            <VStack spacing={8}>
            <Text fontSize="l"> Have a suggestion? Leave it here! </Text>
            <Box textAlign="left" fontsize="m" w='100%'>
              <Text fontSize="md">   What is your name? </Text>
              <Textarea placeholder='Here is a sample textbox' />
            </Box>
            </VStack>
          </GridItem>

          <GridItem colSpan={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
          </GridItem>
        </Grid>
      </Box>  
      
    </ChakraProvider>
  );
}

export default App;
