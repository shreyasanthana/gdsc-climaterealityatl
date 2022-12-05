import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AboutPage></AboutPage>
    </ChakraProvider>
  );
}

export default App;
