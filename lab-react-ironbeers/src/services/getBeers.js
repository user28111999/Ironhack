export const getBeers = () => {
    return fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then(data => data.json())
        .catch(err => console.error(err))
}