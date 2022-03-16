import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`

`

const ContainerItem = styled.div`

`

const Home = () => {
    return (
        <Container>
            <ContainerItem>
                <Link
                    to="/beers"
                >All Beers</Link>
            </ContainerItem>
            <ContainerItem>
                <Link
                    to="/random-beer"
                >Random Beer</Link>
            </ContainerItem>
            <ContainerItem>
                <Link
                    to="/new-beer"
                >New Beer</Link>
            </ContainerItem>
        </Container>
    )
}

export default Home