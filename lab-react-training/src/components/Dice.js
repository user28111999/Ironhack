import { useEffect, useState } from "react"
import styled from "styled-components"

import Empty from "../assets/images/dice-empty.png"
import One from "../assets/images/dice1.png"
import Two from "../assets/images/dice2.png"
import Three from "../assets/images/dice3.png"
import Four from "../assets/images/dice4.png"
import Five from "../assets/images/dice5.png"
import Six from "../assets/images/dice6.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;

    & img {
        height: 10vh;
    }

    & img:hover {
        cursor: pointer;
    }
`

const Dice = () => {
    const [clicked, setClicked] = useState(false)
    const [image, setImage] = useState(Empty)

    useEffect(() => {
        const dieValues = [
            One, Two, Three,
            Four, Five, Six
        ]

        if (clicked) {
            setTimeout(() => {  
                setImage(dieValues[~~(Math.random() * dieValues.length)])   
            }, 1000)
        }
    }, [clicked])

    return (
        <Container>
            <img 
                src={image} 
                alt="Dice" 
                onClick={() => setClicked(!clicked)} 
            />
        </Container>
    )
}

export default Dice