import { useState } from "react"
import styled from "styled-components"

const LikeButton = () => {
    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState("")

    const changeBgColor = () => {
        const rainbow = [
            "red", "orange", "yellow", 
            "green", "blue", "purple"
        ]

        setBgColor(rainbow[~~(Math.random() * rainbow.length)])
        setCount(count + 1)
    }

    const Container = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 24px 0;

        & p {
            margin: 0;
            padding: 12px 24px;
            border: 2px solid black;
            font-size: 18px;
            cursor: pointer;
            user-select: none;
            background-color: ${bgColor};
        }
    `

    return (
        <Container onClick={() => changeBgColor()}>
            <p>{count} Likes</p>
        </Container>
    )
}

export default LikeButton