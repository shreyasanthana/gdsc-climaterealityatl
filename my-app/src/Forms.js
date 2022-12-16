import React, { useState } from "react";
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
import 'react-phone-number-input/style.css'

const Form = () => {
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
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">

          <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
              
              <Grid minH="100vh" p={3} templateColumns='repeat(5, 1fr)'>
              <GridItem colSpan={2}>
                  <VStack spacing={5}>
                  <Text fontSize="l"> Have a suggestion? Leave it here! </Text>
                  <Box textAlign="left" fontSize="m" w='100%'>
                    <FormControl isRequired>
                      <FormLabel> Name: </FormLabel>
                      <Input
                        placeholder="First and Last Name"
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
                  <button type="submit">Connect</button>
                  </VStack>
                </GridItem>
              </Grid>
            </Box>  
            
          </ChakraProvider>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
