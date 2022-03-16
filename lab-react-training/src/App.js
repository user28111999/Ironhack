import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import Rating from "./components/Rating"
import LikeButton from "./components/LikeButton"
import DriverCard from "./components/DriverCard"
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice"

import "./App.css"
import Maxence from "./assets/images/maxence.png"
import MaxenceGlasses from "./assets/images/maxence-glasses.png"

const App = () => {
  return (
    <div className="container">
      <IdCard
        lastName="S"
        firstName="Noel"
        gender="Male"
        height={178}
        birth={new Date("1999-11-28")}
        picture="https://randomuser.me/api/portraits/men/2.jpg"
      />
      <IdCard
        lastName="Xiang"
        firstName="Tom"
        gender="Male"
        height={180}
        birth={new Date("1995-03-16")}
        picture="https://randomuser.me/api/portraits/men/4.jpg"
      />
      <Greetings lang="en">Florian</Greetings>
      <Greetings lang="th">Pauline</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={420} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className="creditCards">
        <CreditCard
          type="Visa"
          number="0123456789010995"
          expirationMonth={2}
          expirationYear={2023}
          bank="Minecraft Bank"
          owner="Steve MC"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Boursorama"
          owner="Mark Xiang"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <LikeButton />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <ClickablePicture
        img={Maxence}
        imgClicked={MaxenceGlasses}
      />
      <Dice />
    </div>
  )
}

export default App