// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Alan",
    lastName: "Sisoukda",
    occupation: "Ironhacker",
    age: 22,
    description: "He has a lot of connections",
    image: "https://i.ibb.co/88tG5xm/Snapchat-1354160305.jpg",
    color: "red"
  },
  {
    firstName: "Tom",
    lastName: "Xiang",
    occupation: "Ironhacker",
    age: 48,
    description: "Got caught numeral times near high schools and PhD in plant toxicology.",
    image: "https://i.ibb.co/N31JCbT/Snapchat-1887781057.jpg",
    color: "green"
  },
  {
    firstName: "Florian",
    lastName: "Toto",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
  },
  {
    firstName: "Pauline",
    lastName: "Toto",
    occupation: "Actor",
    age: 27,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "blue"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "yellow"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
  }
];

// Rooms Array

const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

// Weapons Array

const weaponsArray = [
  { name: "Knife", weight: 10 },
  { name: "Poison", weight: 2 },
  { name: "Pistol", weight: 20 },
  { name: "Bat with nails", weight: 15 },
  { name: "Chainsaw", weight: 17.5 },
  { name: "TNT", weight: 30 },
  { name: "Bow", weight: 18 },
  { name: "Screwdriver", weight: 11 },
  { name: "Hammer", weight: 15 }
];


// ITERATION 2

function selectRandom(arr) {
  return arr[
    ~~(arr.length * Math.random())
  ]
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    room: selectRandom(roomsArray),
    weapon: selectRandom(weaponsArray)
  }
}


// ITERATION 3

function revealMystery() {
  let result = pickMystery()
  return `${result["suspect"].firstName} ${result["suspect"].lastName} killed Mr. Boddy using the ${result["weapon"].name} in the ${result["room"]}!`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
