import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  // Here @ the function the parameter has to match the const defined here in app.js, not what i submited in presentDrinks.js
  presentDrinks(URL);
});
