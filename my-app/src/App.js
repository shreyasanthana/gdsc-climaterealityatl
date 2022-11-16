import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import EventPage from './pages/EventsPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <EventPage />
    </ChakraProvider>
  );
}

export default App;
