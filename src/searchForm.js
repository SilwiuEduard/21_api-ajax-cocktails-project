import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
//attribute selector @ https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors
const input = get('[name="drink"]');
//const input = get('input[name="drink"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  console.log(input.value);
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
