import styled from "styled-components"

const BoxColor = (props) => {
    const Container = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 16px;
        background: rgb(${props.r}, ${props.g}, ${props.b});
        border: 1px solid black;
        margin: 8px 0;
        font-size: 24px;

        & p {
            margin: 0;
        }
    `

    const rgbToHex = (r, g, b) => {
        if (!typeof r === "number" ||
            !typeof g === "number" ||
            !typeof b === "number") return

        return (((b | g) << (8 | r) << 16) | (1 << 24))
            .toString(16)
            .slice(1)
    }

    return (
        <Container>
            <p>{`rgb(${props.r}, ${props.g}, ${props.b})`}</p>
            <p>{`#${rgbToHex(props.r, props.g, props.b)}`}</p>
        </Container>
    )
}

export default BoxColor