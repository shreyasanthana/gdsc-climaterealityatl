import React from 'react';
import { ChakraProvider, Box, Text, VStack, Grid, theme, } from '@chakra-ui/react';
import Mailchimp from "react-mailchimp-form";

function SubscribeComponent() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" align="center">
        <Grid minH="1vh" p={0}>
        <Text fontSize={{ base: '24px', md: '30px', lg: '30px' }} fontWeight = 'bold'> Subscribe to our mailing list here:</Text>
          <VStack spacing={20}>
          <Mailchimp
                action="https://website.us20.list-manage.com/subscribe/post?u=249e1c6faeb13ab1351388d1f&amp;id=b2c9d93035&amp;f_id=00044ee6f0"
                fields={[
                    {
                        name: "EMAIL",
                        placeholder: "Type your email",
                        borderColor:"red",
                        type: "email",
                        required: true,
                        borderWidth:'4px',
                    },
                ]}

                className="chimp"
          />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default SubscribeComponent;
