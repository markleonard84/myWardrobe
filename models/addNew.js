const db = require('../config/database.js');
const { User, Item, Category, Outfit, Planner } = require('./define.js');

const addNewUser = async (name) => {
  const create = await User.create({
    name: name,
  });
  return create;
};

const addNewItem = async (
  name,
  colour,
  pattern,
  weight,
  imageURL,
  categoryID,
  userID
) => {
  console.log('addNewItem function called');
  const create = await Item.create({
    name: name,
    colour: colour,
    pattern: pattern,
    weight: weight,
    imageURL: imageURL,
    categoryID: categoryID,
    userID: userID,
  });
  return create;
};

const addNewCategory = async (name) => {
  console.log('addNewCategory function called');
  const create = await Category.create({
    name: name,
  });
  return create;
};

const addNewOutfit = async (name) => {
  console.log('addNewOutfit function called');
  const add = await Outfit.create({
    name: name,
  });
  return add;
};

const addNewCalanderEntry = async (date, outfit) => {
  console.log('addNewCalanderEntry function called');
  const add = await Planner.create({
    date: date,
    outfitID: outfit, 
  });
  return add;
}

db.addNewUser = addNewUser;
db.addNewItem = addNewItem;
db.addNewCategory = addNewCategory;
db.addNewOutfit = addNewOutfit;
db.addNewCalanderEntry = addNewCalanderEntry;

module.exports = db;
