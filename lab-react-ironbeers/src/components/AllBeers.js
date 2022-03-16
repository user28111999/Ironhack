import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { getBeers } from "../services/getBeers"
import Header from "./Header"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const BeerItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    & + & {
        margin: 8px 0;
    }

    & img {
        width: calc(10vh + 12px);
        height: 10vh;
        border: 1px dotted red;
    }
`

const AllBeers = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        let mounted = true

        getBeers()
            .then(data => mounted ? setBeers(data) : null)

        return () => mounted = false
    }, [])

    return (
        <Container>
            <Header />
            {beers.map(beer => (
                <BeerItem key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                    </Link>
                </BeerItem>
            ))}
        </Container>
    )
}

export default AllBeers