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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import DonatePage from './DonatePage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DonatePage/>
    </ChakraProvider>
  );
}

export default App;
