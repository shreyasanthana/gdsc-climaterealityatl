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
  Center
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react';
import theme from "../theme";

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    //name, email, age, phone number, previously involved in climate change activism, suggestion
    "entry.90026055": "",
    "entry.1831593027": "",
    "entry.1866223984": "",
    "entry.1584917209": "",
    "entry.1509076509": "",
    "entry.1919208991": ""

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

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmvxm0fJezJe_oB3onPYLuUWYU595fMFJzZkjzguOf-rJeKg/formResponse?entry.90026055=${formData["entry.90026055"]}&entry.1831593027=${formData["entry.1831593027"]}&entry.1866223984=${formData["entry.1866223984"]}&entry.1584917209=${formData["entry.1584917209"]}&entry.1509076509=${formData["entry.1509076509"]}&entry.1919208991=${formData["entry.1919208991"]}`;

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
                  <Text fontSize="35px" fontWeight='bold'> Join The Climate Reality Atlanta Chapter! </Text>
                  <Box textAlign="middle" fontSize="m" w='100%'>
                    <FormControl isRequired>
                      <FormLabel> First Name: </FormLabel>
                      <Input
                        placeholder="First Name"
                        required
                        type="text"
                        name="entry.90026055"
                        onChange={handleInputData("entry.90026055")}
                        value={formData["entry.90026055"]}
                        autoComplete={false}
                      />
                    </FormControl>
                  </Box>

                    {/* MUST UPDATE THE ENTRY VALUE */}
                  <Box textAlign="middle" fontSize="m" w='100%'>
                    <FormControl isRequired>
                      <FormLabel> Last Name: </FormLabel>
                      <Input
                        placeholder="Last Name"
                        required
                        type="text"
                        name="entry.90026055"
                        onChange={handleInputData("entry.90026055")}
                        value={formData["entry.90026055"]}
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
                      name="entry.1831593027"
                      onChange={handleInputData("entry.1831593027")}
                      value={formData["entry.1831593027"]}
                      autoComplete={false}
                    />
                    </FormControl>
                  </Box>
      
                  <Box textAlign="left" fontSize="m" w='100%'>
                  <FormControl>
                      <FormLabel> Age </FormLabel>
                      <Input
                        type='number'
                        placeholder="18"
                        name="entry.1866223984"
                        onChange={handleInputData("entry.1866223984")}
                        value={formData["entry.1866223984"]}
                        autoComplete={false}
                      ></Input>
                    </FormControl>
                  </Box>
      
                  <Box textAlign="left" fontSize="m" w='100%'>
                  <FormControl>
                      <FormLabel> Phone Number: </FormLabel>
                      <Input
                        maxLength={10}
                        type='tel'
                        placeholder='Please only enter the 10 digits of your phone number (no dashes or spaces)'
                        name="entry.1584917209"
                        onChange={handleInputData("entry.1584917209")}
                        value={formData["entry.1584917209"]}
                        autoComplete={false}
                      ></Input>
                    </FormControl>
                  </Box>
      
                  <Box textAlign="left" fontSize="m" w='100%'>
                  <Text fontSize="md"> Suggestion: </Text>
                  <Textarea
                    placeholder="Write your suggestion here!"
                    required
                    name="entry.1509076509"
                    rows="4"
                    cols="100"
                    onChange={handleInputData("entry.1509076509")}
                    value={formData["entry.1509076509"]}
                    autoComplete={false}
                  ></Textarea>
                  </Box>

                <Box textAlign="left" fontSize="m" w='100%'>
                  <Text fontSize="md"> Any questions, comments, and/or concerns?: </Text>
                  <Textarea
                    placeholder="Write them here!"
                    name="entry.1919208991"
                    rows="4"
                    cols="100"
                    onChange={handleInputData("entry.1919208991")}
                    value={formData["entry.1919208991"]}
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

