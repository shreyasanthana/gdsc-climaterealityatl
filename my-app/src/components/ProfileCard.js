import { Badge, Image, Center, Box } from "@chakra-ui/react"

export default function ProfileCard({ name, role, email, phone_number, linkedin, instagram }) {
    return (
        <Box bg='#8dc63f' height='350px' style={{ textAlign: "center", paddingTop: "2%" }} borderRadius={25}>
            <Center><Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' /></Center>
            <h1><b> Name: </b>{name}</h1>
            <h1><b> Role: </b> <Badge borderRadius='full' px='2' colorScheme='blackAlpha'>{role}</Badge> </h1>
            <h1><b> Email: </b>{email}</h1>
            <h1><b> Phone Number: </b>{phone_number}</h1>
            <h1><b> LinkedIn: </b>{linkedin}</h1>
            <h1><b> Instagram: </b>{instagram}</h1>
        </Box>
    )
}