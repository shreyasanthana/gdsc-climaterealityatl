import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Flex,
  Button,
  Spacer,
  HStack,
  Center,
  Checkbox, 
  CheckboxGroup
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react';
import theme from "../theme";

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    //name, email, message
    "entry.1883149767": "",
    "entry.1568274469": "",
    "entry.30111594": ""

  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  function refreshPage() {
    window.location.reload(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = 'https://docs.google.com/forms/d/1v8Z_wJj0PfYLNlFMt9AO3m7jgI1kvC1BwFzgzn7bjKY/formResponse?entry.1883149767=${formData["entry.1883149767"]}&entry.1568274469=${formData["entry.1568274469"]}&entry.30111594=${formData["entry.30111594"]}'

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">
               Thanks, will get back to you soon
            <Flex color='black' w='100'>
            <Button onClick={refreshPage} colorScheme='black' variant='outline' size='md'>Click to submit another form!</Button>
            </Flex>
          </div>
          
          
        ) : (
          <form onSubmit={handleSubmit} target="_self">

          <ChakraProvider theme={theme}>
          <Flex
            flexDirection='left'
            mx="20px"
            mb="10px"  // for proper footer placement
            gap="80px" 
           >
        
            <Box textAlign="center" fontSize="xl" width="100%">
              <Grid minH="100vh" p={3} templateColumns='repeat(5, 1fr)'>
              <GridItem colSpan={5}>
                  <VStack spacing={5}>
                  <Text fontSize="35px" fontWeight='bold'> Contact Us! </Text>
                  <Box textAlign="middle" fontSize="m" w='100%'>
                    <FormControl isRequired>
                      <FormLabel> Name: </FormLabel>
                      <Input
                        placeholder="Name"
                        required
                        type="text"
                        name="entry.1883149767"
                        onChange={handleInputData("entry.1883149767")}
                        value={formData["entry.1883149767"]}
                        autoComplete={false}
                      />
                    </FormControl>
                  </Box>


                  <Box textAlign="left" fontSize="m" w='100%'>
                  <FormControl isRequired>
                      <FormLabel> Email Address </FormLabel>
                      <Input
                      required
                      type="email"
                      placeholder='username@website.com'
                      name="entry.1568274469"
                      onChange={handleInputData("entry.1568274469")}
                      value={formData["entry.1568274469"]}
                      autoComplete={false}
                    />
                    </FormControl>
                  </Box>
      
                <Box textAlign="left" fontSize="m" w='100%'>
                  <Text fontSize="md"> Message </Text>
                  <Textarea
                    placeholder="Write your message!"
                    name="entry.30111594"
                    rows="4"
                    cols="100"
                    onChange={handleInputData("entry.30111594")}
                    value={formData["entry.30111594"]}
                    autoComplete={false}
                  ></Textarea>
                  </Box>
                  <Button type="submit" colorScheme='teal' variant='outline' size='lg'>Connect</Button>
                  </VStack>
                </GridItem>
              </Grid>
            </Box>  
    
  
            </Flex>
          </ChakraProvider>
          </form>
          
        )}

      </div>
    </div>
  );
};

