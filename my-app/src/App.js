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
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import TestMiniCalendar from "./pages/TestMiniCalendar";
import About from "./pages/About";
import Events from "./pages/Events";
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
  useEffect(()=>
    {
      if(location.pathname === "/" || location.pathname === "/home"){
        setNavBg("transparent");
      } else {
        setNavBg("black");
      }
    },[location]);


  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar navBgColor={navBg}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
