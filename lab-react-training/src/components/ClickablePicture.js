import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    padding: 16px;
    
    & img {
        height: 50vh;
        margin-left: auto;
        margin-right: auto;
    }

    & img:hover {
        cursor: pointer;
    }
`

const ClickablePicture = (props) => {
    const [clicked, setClicked] = useState(false)

    return (
        <Container>
            <img
                src={!clicked ? props.img : props.imgClicked}
                alt="Maxence"
                onClick={() => setClicked(!clicked)}
            />
        </Container>
    )
}

export default ClickablePicture