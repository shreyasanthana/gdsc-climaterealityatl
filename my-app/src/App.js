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
    <div className="App">
    <div className="formWrapper">
      <div className="contactForm">
        <Form />
      </div>
    </div>
  </div>
  );
}

export default App;
