// Iteration 1: Names and Input

const getNames = (hacker1, hacker2) => {
    if (!hacker1 || !hacker2) return
    
    console.log(`The driver's name is ${hacker1}`)
    console.log(`The navigator's name is ${hacker1}`)
}
  
// Iteration 2: Conditionals
// 2.1
const getNamesByLength = (hacker1, hacker2) => {
    if (!hacker1 || !hacker2) return

    if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 
    } else if (hacker1.length == hacker2.length) {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    } else {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
}

// Iteration 3: Loops

// 3.1
const printInCapitals = (driver) => {
    if (!driver) return
    console.log(
        driver
            .toUpperCase()
            .split("")
            .join(" ")
            .replace(/\s+/g, " ")
    )
}

// 3.2
const printInReverse = (navigator) => {
    if (!navigator) return
    console.log(
        navigator
            .split('')
            .reverse()
            .join('')
    )
}

// 3.3
const getNamesByLexicographic = (hacker1, hacker2) => {
    if (!hacker1 || !hacker2) return
    if (hacker1 == hacker2) console.log("What?! You both have the same name?")
    
    let tempArr = []
    tempArr.push(hacker1)
    tempArr.push(hacker2)
    tempArr.sort((hacker1, hacker2) => {
        if (hacker1.localeCompare(hacker2) == 1) {
            console.log("The driver's name goes first.")
        } else {
            console.log("Yo, the navigator goes first definitely.")
        }
    })
}