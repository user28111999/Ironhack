export const getRandomBeer = () => {
    return fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(data => data.json())
        .catch(err => console.error(err))
}