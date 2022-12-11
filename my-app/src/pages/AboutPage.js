import ProfileCard from "../components/ProfileCard";
import '../components/ProfileCard.css';
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react"

export default function AboutPage() {
    return (
        <Box pt={'120px'} pb={'240px'}>
            <Heading style={{ paddingTop: "2%", paddingBottom: "2.5%", fontSize: '30px', textAlign: "center" }}>About Us</Heading>

            <Text style={{ textAlign: 'center', marginRight: '10vw', marginLeft: '10vw' }}>We’re a diverse group of passionate individuals who’ve come together to solve the greatest challenge of our time. We are activists, cultural leaders, organizers, scientists, and storytellers committed to building a sustainable future together. At The Climate Reality Project: Atlanta Chapter, we strive to play a crucial role in promoting clean, efficient, and sustainable consumption, energy generation, and transportation practices while promoting an equitable division of benefits and costs throughout Georgia and the Atlanta area. Here at the Atlanta Chapter of The Climate Reality Project, we’re committed to investing our expertise and resources in order to further achieve our cause.</Text>

            <br />

            <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} pr="15px" pl="15px">
                <ProfileCard name="Vince" role="Lead" email="test@gmail.com" phone_number="(472) 472-3883" linkedin="www.linkedin.com/test/" instagram="@test.gatech" />
                <ProfileCard name="Maddy" role="Developer" email="maddy@gmail.com" phone_number="(872) 826-2245" linkedin="https://www.linkedin.com/in/maddy/" instagram="@test.gatech" />
                <ProfileCard name="John" role="UI/UX" email="john@gmail.com" phone_number="(384) 472-3775" linkedin="https://www.linkedin.com/in/john/" instagram="@john.gatech" />
                <ProfileCard name="Maddy" role="Developer" email="maddy@gmail.com" phone_number="(872) 826-2245" linkedin="https://www.linkedin.com/in/maddy/" instagram="@maddy.gatech" />
                <ProfileCard name="Dani" role="Manager" email="dani@gmail.com" phone_number="(474) 993-9273" linkedin="https://www.linkedin.com/in/dani/" instagram="@dani.gatech" />
            </SimpleGrid>
        </Box>
    )
}