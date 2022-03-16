const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(async () => {
    //  1 + 2
    const newRecipe = await Recipe.create({
      title: "Ramen",
      level: "Easy Peasy",
      ingredients: ["Pack of Ramen", "Hot Water"],
      cuisine: "Asian",
      dishType: "soup",
      duration: 5,
      creator: "Noel"
    })
    .then((recipe) => console.log(`1 + 2) Successfully created: ${recipe}`))
    .catch((err) => console.log(`1 + 2) Error creating recipe: ${err}`))
    
    // 3
    const insertMany = await Recipe.insertMany(data)
    .then((recipes) => {
      console.log("2) Every recipe from data:")
      recipes.forEach((recipe) => {
        console.log(`- ${recipe.title}`)
      })
    })
    .catch((err) => console.log(`3) Error inserting data: ${err}`))

    // 4
    const update = await Recipe.findOneAndUpdate(
      { title: { $eq: "Rigatoni alla Genovese" }},
      { duration: 100 },
      { new: true }
    )
    .then((doc) => console.log(`4) Succesfully updated data: ${doc}`))
    .catch((err) => console.log(`4) Error updating data: ${err}`))

    // 5
    const deleteOne = await Recipe.deleteOne({
      title: "Carrot Cake"
    })
    .then((doc) => {
      if (doc.deletedCount > 0) {
        console.log("5) Succesfully deleted Carrot Cake")
      }
    })
    .catch((err) => console.log(`2) Error deleting Carrot Cake: ${err}`))

    // 6
    try {
      mongoose.connection.close()
    } catch (error) {
      console.error(error)
    } finally {
      console.log("6) Connection closed")
    }
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  }
)
