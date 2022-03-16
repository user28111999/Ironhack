import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  background: #3dc4fc;
  font-weight: bold;
  font-size: 24px;
  
  & a {
    text-decoration: none;
    color: white;
  }
`

const Header = () => {
    return (
        <Container>
          <Link to="/">
            lab-react-ironbeers
          </Link>
        </Container>
    )
}

export default Header