export const getBeerById = (id) => {
    return fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(data => data.json())
        .catch(err => console.error(err))
}