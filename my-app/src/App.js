import React, { useState, setState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
} from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import TestMiniCalendar from "./pages/TestMiniCalendar";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


import Navbar from "./components/Navbar";

// To do: evaluate if these two imports needed
//  Header font: lato
//  Text font: Merriweather
import '@fontsource/merriweather-sans/400.css'
import '@fontsource/lato/900.css'

import theme from "./theme";


function App() {

  // Change Navbar bg color if not home page to
  //  follow theme of national website
  const [navBg, setNavBg] = useState("red")
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      setNavBg("transparent");
    } else {
      setNavBg("black");
    }
  }, [location]);


  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar navBgColor={navBg} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />

          {/* To do: Remove temporary routes below after testing completed */}
          <Route path="/testminicalendar" element={<TestMiniCalendar />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
