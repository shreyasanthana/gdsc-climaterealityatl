import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
<Box pt={'150px'} pb={'240px'}> 
        <Container
          centerContent
          position = 'relative'
          maxW = 'contain.lg'>
          <Box
          position = 'relative'
          borderWidth='4px'
          borderRadius='lg' 
          borderColor = '#8DC63F'
          w = {{ sm: '665px', md: '770px', lg: '795px', xl: "800px"}}
          h = '500px'
          >
          <ContactForm /> 
          </Box>
        </Container>
      </Box>
    
  )
}

export default Contact;