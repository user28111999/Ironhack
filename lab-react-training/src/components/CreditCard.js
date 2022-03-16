import styled from "styled-components"

const CreditCard = (props) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        background: ${props.bgColor};
        color: ${props.color};
        border-radius: 12px;
        min-width: 50vh;
        max-width: 50vh;

        & div img {
            height: ${props.type === "Visa" ? "5vh" : "7.5vh"};
            padding: 12px;
            float: right;
        }
    `

    const CardNumber = styled.h2`
        font-size: 32px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    `

    const Footer = styled.div`
        padding: 12px;
        margin-left: 12px;
        margin-bottom 12px;

        & p {
            margin: 0 8px;
        }

        & div {
            display: flex;
        } 
    `

    const getImageCard = () => {
        switch (props.type) {
            case "Master Card":
                return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2014%2F07%2Fmastercard-logo.png&f=1&nofb=1"
            default:
                return "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2017%2F05%2FVisa-Logo-PNG-Pic.png&f=1&nofb=1"
        }
    }

    const hideNumbers = () => {
        if (!props.number) return
        return `**** **** **** ${props.number.toString().substr(12, 15)}`
    }

    return (
        <Container>
            <div><img src={getImageCard()} alt={props.type} /></div>
            <CardNumber>{hideNumbers()}</CardNumber>
            <Footer>
                <div>
                    <p>{`Expires ${props.expirationMonth}/${props.expirationYear}`}</p>
                    <p>{props.bank}</p>
                </div>
                <p>{props.owner}</p>
            </Footer>
        </Container>
    )
}

export default CreditCard