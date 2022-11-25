import Form from "./Forms";
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
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react';
import {NumberInput} from '@chakra-ui/react'
function App() {
  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        
        <Grid minH="100vh" p={3} templateColumns='repeat(5, 1fr)'>
        <GridItem colSpan={2}>
            <VStack spacing={5}>
            <Text fontSize="l"> Have a suggestion? Leave it here! </Text>
            <Box textAlign="left" fontsize="m" w='100%'>
              <FormControl isRequired>
                <FormLabel> Name: </FormLabel>
                <Input placeholder="First and Last Name" />
              </FormControl>
            </Box>

            <Box textAlign="left" fontsize="m" w='100%'>
            <FormControl isRequired>
                <FormLabel> Email Address </FormLabel>
                <Input type='email' placeholder='username@website.com'/>
              </FormControl>
            </Box>

            <Box textAlign="left" fontsize="m" w='100%'>
            <FormControl>
                <FormLabel> Age </FormLabel>
                <Input type='number' placeholder='18'/>
              </FormControl>
            </Box>

            <Box textAlign="left" fontsize="m" w='100%'>
            <FormControl>
                <FormLabel> Phone Number: </FormLabel>
                <Input type='tel' placeholder='000-000-0000'/>
              </FormControl>
            </Box>

            <Box textAlign="left" fontsize="m" w='100%'>
            <Text fontsize="md"> Suggestion: </Text>
            <Textarea placeholder="Write your suggestion here!" />
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
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <div className="App">
      <div className="formWrapper">
        <div className="contactForm">
          <Form />
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  );
}

export default App;
