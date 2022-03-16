// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => {
  if (!arr) return
  return arr.map((m) => m.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// "Not the best though" -Noel
const howManyMovies = (arr) => {
  let filterArr = arr.filter(a => (
      a.genre.includes('Drama')
    ) && (
      a.director === 'Steven Spielberg'
    ))
  return filterArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (arr) => {
  if (!arr.length) return 0
  
  let avgRate = arr.reduce((sum, m) => {
    return sum += m.score
  }, 0) / arr.length

  return +avgRate.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (arr) => {
  let allDramas = arr.filter((m) => {
    return m.genre.includes('Drama')
  })
  
  if (!allDramas.length) return 0

  let avgScore = allDramas.reduce((sum, m) => {
    return sum += m.score
  }, 0) / allDramas.length

  return +avgScore.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
  let titles = arr.slice().map((m) => {
    return m.title
  }).sort()

  if (titles.length >= 20) {
    return titles = titles.slice(0, 20);
  } else {
    return titles;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArray) => {
  return moviesArray.map((m) => {
    let hours = 0
    let minutes = 0
    
    if (m.duration.indexOf('h') !== -1) {
      hours = parseInt(m.duration[0], 10) * 60
    }
    
    if (m.duration.indexOf('min') !== -1) {
      minutes = parseInt(m.duration.substring(m.duration.length - 5, m.duration.length - 3), 10)
    }
    
    return Object.assign({}, m, { duration: hours + minutes })
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
