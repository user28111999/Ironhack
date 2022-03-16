import { useState } from "react"
import styled from "styled-components"

import { newBeer } from "../services/newBeer"
import Header from "./Header"

const Container = styled.div`
    display: block;
`

const NewBeer = () => {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [contributed, setContributed] = useState("")
    const [attLevel, setAttLevel] = useState(0)

    const handleName = e => setName(e.target.value)
    const handleTagline = e => setTagline(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleFirstBrewed = e => setFirstBrewed(e.target.value)
    const handleBrewersTips = e => setBrewersTips(e.target.value)
    const handleContributed = e => setContributed(e.target.value)
    const handleAttLevel = e => setAttLevel(e.target.value)

    const submit = (e) => {
        e.preventDefault()

        newBeer({ 
            name, 
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attLevel,
            contributed
        })
            .then((v) => console.log(v))
            .catch(e => console.error(e))
    }

    return (
        <Container>
            <Header />
            <form onSubmit={submit}>
                <label for="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleName} />
                <label for="tagline">Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />
                <label for="description">Description</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />
                <label for="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewed} />
                <label for="brewers_tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTips} />
                <label for="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attLevel} onChange={handleAttLevel} />
                <label for="contributed_by">Contributed by</label>
                <input type="text" name="contributed_by" value={contributed} onChange={handleContributed} />
                <input type="submit" value="Submit" />
            </form>
        </Container>
    )
}

export default NewBeer