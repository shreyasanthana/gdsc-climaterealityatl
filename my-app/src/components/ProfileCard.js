import { Badge, Image, Button, Center } from "@chakra-ui/react"

import { MdCall, MdFormatAlignCenter } from "react-icons/md"



export default function ProfileCard({name, role, email, phone_number, linkedin, instagram}) {
    return (
        <div style={{textAlign: "center", paddingTop : "2%"}}>
            <Center><Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' /></Center>
            <h1><b> Name:</b>{name}</h1>
            <h1><b> Role:</b> <Badge borderRadius='full' px='2' colorScheme='teal'>{role}</Badge> </h1>
            <h1><b> Email:</b>{email}</h1>
            <h1><b> Phone Number:</b>{phone_number}</h1>
            <h1><b> LinkedIn:</b>{linkedin}</h1>
            <h1><b> Instagram:</b>{instagram}</h1>
            
            <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
                Call {name}
            </Button>
        </div>

    )
}