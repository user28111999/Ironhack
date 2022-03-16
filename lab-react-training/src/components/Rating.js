import styled from "styled-components"

const Container = styled.div`
    display: flex;
    font-size: 32px;
    margin-left: auto;
    margin-right: auto;
`

const Rating = (props) => {
    const getStars = () => {
        let rating = ""
        let j = Math.round(props.children)
        let i = 0
        while (i < 5) {
          if (j > 0) {
            rating += "★"
            i++
            j--
          }

          if (j === 0) {
            if (i < 5) {
              rating += "☆"
              i++
            }
          }
        }

        return rating
      }

    return (
        <Container>
            {getStars()}
        </Container>
    )
}

export default Rating