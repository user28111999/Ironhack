document.addEventListener('DOMContentLoaded', () => {

  console.log('lab-express-cinema JS imported successfully!');

  const movies = document.querySelectorAll(".movie")

  const renderElements = (x) => {
    const moviesDesc = document.querySelector(".movies-desc")
    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const showTimes = document.querySelector("#showtimes")

    const data = {
      id: x.srcElement.attributes[1].nodeValue,
      image: x.srcElement.attributes[2].nodeValue,
      title: x.srcElement.attributes[3].nodeValue,
      description: x.srcElement.attributes[4].nodeValue
    }

    const image = document.querySelector("#image")
    image.id = "image"
    image.src = data.image
    image.alt = data.title

    title.innerHTML = data.title
    description.innerHTML = data.description
    showTimes.innerHTML = "SHOWTIMES & MORE..."
    showTimes.href = data.id

    moviesDesc.style.background = `url(${data.image}) center;`
  }

  movies.forEach((movie) => {
    movie.addEventListener("mouseover", renderElements)
  })

}, false);
