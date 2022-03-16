export const newBeer = (beer) => {
    return fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(beer)
    })
    .then(data => data.json())
    .catch(err => console.error(err))
}