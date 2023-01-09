import React from 'react'
import { Button } from '@chakra-ui/react'

// *** Comment: This is a component and not a page ***
const Donation = () => {
  return (
    <div>
      Tooni's Donation React Component
      <a href = "https://donorbox.org/blackgirlscodetheworld" target ="_blank" rel= "noreferrer">
        <Button colorScheme='teal' size='lg'>
        Donation Button
        </Button>
      </a>

    </div>
  )
}



export default Donation