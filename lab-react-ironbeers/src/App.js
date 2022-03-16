import { Routes, Route } from "react-router-dom"

import { getRandomBeer } from "./services/getRandomBeer"

import Home from "./components/Home"
import AllBeers from "./components/AllBeers"
import BeerDetails from "./components/BeerDetails"
import NewBeer from "./components/NewBeer"

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />
        <Route 
          path="/beers" 
          element={<AllBeers />}
        />
        <Route
          path="/beers/:id"
          element={<BeerDetails />}
        />
        <Route 
          path="/random-beer" 
          element={<BeerDetails beer={getRandomBeer} />}
        />
        <Route 
          path="/new-beer" 
          element={<NewBeer />}
        />
      </Routes>
    </div>
  )
}

export default App