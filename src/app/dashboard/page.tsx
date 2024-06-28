import Details from "@/components/extintor_review/details"
import { Observations } from "@/components/extintor_review/observations"
import Container from "@/components/layout/container"

export default function Page() {
    return (
        <main>
            <Container className="m-8">
                <Details />
                <Observations />
            </Container>
        </main>
    )
}