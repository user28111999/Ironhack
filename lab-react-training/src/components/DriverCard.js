import styled from "styled-components"
import Rating from "./Rating"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #455eb5;
    color: white;
`

const ProfilePicture = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
`

const FullName = styled.h2`
    font-size: 24px;
`

const Header = styled.div`
    display: flex;
`

const Footer = styled.div`
    display: block;
`

const DriverCard = (props) => {
    return (
        <Container>
            <Header>
                <ProfilePicture src={props.img} alt={props.name} />
                <FullName>{props.name}</FullName>
            </Header>
            <Footer>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </Footer>
        </Container>
    )
}

export default DriverCard