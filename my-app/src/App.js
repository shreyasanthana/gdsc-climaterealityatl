import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import TestMiniCalendar from "./pages/TestMiniCalendar"
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testminicalendar" element={<TestMiniCalendar />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
