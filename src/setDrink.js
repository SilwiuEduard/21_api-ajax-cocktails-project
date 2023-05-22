const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    console.log(e.target);
    // bubbling to get data ID
    console.log(e.target.parentElement);
    const id = e.target.parentElement.dataset.id;
    console.log(id);
    // JSON.stringify JSON.parse is not needed here, because is string already
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
