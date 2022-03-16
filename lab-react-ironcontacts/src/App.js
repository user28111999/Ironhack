import { useState } from "react"
import styled from "styled-components"

import contacts from "./contacts.json"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 10vh;
  }

  td {
    text-align: center;
    border: 1px solid black;
  }

  button {
    cursor: pointer;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;

  & button {
    margin: 8px 0;
    padding: 12px;
    font-size: 18px;
  }
`

const Table = styled.table`
  padding: 12px;
`

const App = () => {
  const [actors, setActors] = useState(contacts.slice(0, 5))

  const addRandomContact = () => {
    return [...actors, contacts[~~((Math.random() * contacts.length) - 1)]]
  }

  const sortPopularity = () => {
    return [...actors.sort((a, b) => b.popularity - a.popularity)]
  }

  const sortAlphabetically = () => {
    return [...actors.sort((a, b) => a.name.localeCompare(b.name, "en", {"sensitivity": "base"}))]
  }

  return (
    <Container>
      <Buttons>
        <button onClick={() => setActors(addRandomContact())}>
          Add Random Contact
        </button>
        <button onClick={() => setActors(sortPopularity())}>
          Sort by popularity
        </button>
        <button onClick={() => setActors(sortAlphabetically())}>
          Sort by name
        </button>
      </Buttons>
      <Table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actors, id) => (
            <tr key={actors.id}>
              <td>
                <img
                  src={actors.pictureUrl}
                  alt={actors.name}
                />
              </td>
              <td>{actors.name}</td>
              <td>{actors.popularity.toFixed(2)}</td>
              <td>{actors.wonOscar ? "🏆" : ""}</td>
              <td>{actors.wonEmmy ? "🏆" : ""}</td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default App
