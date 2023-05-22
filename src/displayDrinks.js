import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    hideLoading(); // hide loading GIF after API loads
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      // console.log(drink);
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading(); // hide loading GIF after API loads
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
