import styled from "styled-components"

const Container = styled.div`
    padding: 12px;
    border: 1px solid black;

    & + & {
        margin: 8px 0;
    }
`

const Random = (props) => {
    const randomValue = ~~(Math.random() * (props.max - props.min + 1) + props.min)

    return (
        <Container>
            {`Random value between ${props.min} and ${props.max} => ${randomValue}`}
        </Container>
    )
}

export default Random