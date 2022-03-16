import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { getBeerById } from "../services/getBeerById"
import Header from "./Header"

const Container = styled.div`
    display: block;
`

const BeerDetails = (props) => {
    const { id } = useParams()
    const [beer, setBeer] = useState({})
    
    useEffect(() => {
        let mounted = true

        // if (!props.beer) maybe?
        if (typeof props.beer === "function") {
            props.beer()
                .then(data => mounted ? setBeer(data) : null)
        } else {
            getBeerById(id)
                .then(data => mounted ? setBeer(data) : null)
        }

        return () => mounted = false
    }, [])

    return (
        <Container>
            <Header />
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <span>{beer.tagline} / {beer.first_brewed} / {beer.attenuation_level}</span>
            <p>{beer.description}</p>
            <span>{beer.contributed_by}</span>
        </Container>
    )
}

export default BeerDetails