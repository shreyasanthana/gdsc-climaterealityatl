import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

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