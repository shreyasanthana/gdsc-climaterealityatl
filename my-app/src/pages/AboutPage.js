import ProfileCard from "../components/ProfileCard";
import '../components/ProfileCard.css';
import { SimpleGrid } from "@chakra-ui/react"

export default function AboutPage() {
    return (
        <div >
            <h1 style={{ paddingTop: "2%", paddingBottom: "2.5%", fontSize: '30px', textAlign: "center" }}>This is the About Page Header</h1>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} pr="15px" pl="15px">
                <ProfileCard name="Vince" role="Lead" email="test@gmail.com" phone_number="(472) 472-3883" linkedin="www.linkedin.com/test/" instagram="@test.gatech" />
                <ProfileCard name="Maddy" role="Developer" email="maddy@gmail.com" phone_number="(872) 826-2245" linkedin="https://www.linkedin.com/in/maddy/" instagram="@test.gatech" />
                <ProfileCard name="John" role="UI/UX" email="john@gmail.com" phone_number="(384) 472-3775" linkedin="https://www.linkedin.com/in/john/" instagram="@john.gatech" />
                <ProfileCard name="Maddy" role="Developer" email="maddy@gmail.com" phone_number="(872) 826-2245" linkedin="https://www.linkedin.com/in/maddy/" instagram="@maddy.gatech" />
                <ProfileCard name="Dani" role="Manager" email="dani@gmail.com" phone_number="(474) 993-9273" linkedin="https://www.linkedin.com/in/dani/" instagram="@dani.gatech" />
            </SimpleGrid>
        </div>
    )
}