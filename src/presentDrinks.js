import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
// function to fetch & display

// Can write any name as parameter here, in app.js i have to write what const i have definied there !!
const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url); // wait for the Array drinks

  // display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
