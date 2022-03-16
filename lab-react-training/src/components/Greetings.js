import styled from "styled-components"

const Container = styled.div`
    padding: 12px;
    border: 1px solid black;

    & + & {
        margin: 8px 0;
    }
`

const Greetings = (props) => {
    const getLanguage = () => {
        switch (props.lang) {
            case "de":
                return "🇩🇪 Hallo"
            case "en":
                return "🇬🇧 Hello"
            case "es":
                return "🇪🇸 Hola"
            case "fr":
                return "🇫🇷 Bonjour"
            case "th":
                return "🇹🇭 สวัสดี"
            default:
                return "🏳️‍🌈 你好"
        }
    }

    return (
        <Container>
            {`${getLanguage()} ${props.children}!`}
        </Container>
    )
}

export default Greetings