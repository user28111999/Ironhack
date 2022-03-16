import styled from "styled-components"

import IronHackLogo from "./images/ironhack-logo-xs.png"
import MenuTop from "./images/menu-top-xs.png"
import DeclarativeIcon from "./images/icon1.png"
import ComponentsIcon from "./images/icon2.png"
import SingleWayIcon from "./images/icon3.png"
import JSXIcon from "./images/icon4.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 32px;
  margin: 32px;
  background: #1f2535;
  height: 91vh;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    padding: 16px;
    margin: 24px;

    &:nth-child(2) {
      height: 1.75vh;
      margin-top: auto;
      margin-bottom: auto;
      cursor: pointer;
    }
  }
`

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: white;
  padding: 4vh;

  & div {
    margin-bottom: 6vh;
  }

  & > div h2 {
    font-size: 8vh;
    width: 50%;
    margin: 0;
  }

  & > div p {
    font-weight: 300;
    font-size: 24px;
    margin: 2vh 0;
  }
`
const AwesomeBtn = styled.button`
  background: white;
  font-size: 18px;
  width: fit-content;
  padding: 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 4vh;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  margin: 10vh 0;
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  & img {
    width: fit-content;
    height: 20vh;
    margin: 0;
  }

  & h3 {
    font-size: 32px;
    font-weight: 500;
    margin: 0;
    margin-top: 12px;
    margin-left: 12px;
  }

  & p {
    font-size: 20px;
    opacity: .75;
    width: 50%;
    margin: 0;
    margin-left: 12px;
    margin-top: 8px;
  }
`

const App = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={IronHackLogo} alt="Ironhack" />
          <img src={MenuTop} alt="Menu" />
        </Header>
        <LandingPage>
          <div>
            <h2>Say hello to ReactJS</h2>
            <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
          </div>
          <AwesomeBtn>Awesome!</AwesomeBtn>
        </LandingPage>
      </Container>
      <Footer>
        <FooterItem>
          <img src={DeclarativeIcon} alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </FooterItem>
        <FooterItem>
          <img src={ComponentsIcon} alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </FooterItem>
        <FooterItem>
          <img src={SingleWayIcon} alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </FooterItem>
        <FooterItem>
          <img src={JSXIcon} alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </FooterItem>
      </Footer>
    </>
  )
}

export default App
