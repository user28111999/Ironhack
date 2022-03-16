import styled from "styled-components"

const Container = styled.div`
    display: flex;
    padding: 8px;
    border: 1px solid black;

    & p {
        margin: 4px;
    }

    & + & {
        margin: 12px 0;
    }
`

const IdCard = (props) => {
    const height = `${props.height.toString().substr(0, 1)}.${props.height.toString().substr(1, 3)}m`
    const birthDate = props.birth.toDateString()

    return (
        <Container>
            <img src={props.picture} alt={props.firstName} />
            <div>
                <p><b>First Name</b>: {props.firstName}</p>
                <p><b>Last Name</b>: {props.lastName}</p>
                <p><b>Gender</b>: {props.gender}</p>
                <p><b>Height</b>: {height}</p>
                <p><b>Date of birth</b>: {birthDate}</p>
            </div>
        </Container>
    )
}

export default IdCard