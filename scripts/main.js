let allCountries;
let filteredCountries;
let filters = {
  countryName: "",
  countryRegion: ""
};

const renderCountries = filters => {
  countryContainerEl.innerHTML = "";
  filteredCountries.forEach(element => {
    if (
      (!filters.countryName && !filters.countryRegion) ||
      (element.name.toLowerCase().includes(filters.countryName) &&
        element.region.toLowerCase().includes(filters.countryRegion))
    ) {
      const countryCard = document.createElement("div");
      countryCard.innerHTML = `
        <div class="card" data-countryISO="${element.alpha3Code}">
          <img src="${element.flag}" style="width:100%"/>
          <div class="card__text-container">
            <h2 class="card__text-container--heading">${element.name}</h2>
            <ul class="card__text-container--list">
              <li>
                <span class="card__text-container--list-title"
                  >Population:</span
                >
                ${element.population
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </li>
              <li>
                <span class="card__text-container--list-title">Region:</span>
                ${element.region}
              </li>
              <li>
                <span class="card__text-container--list-title">Capital:</span>
                ${element.capital}
              </li>
            </ul>
          </div>
        </div>`;
      countryContainerEl.appendChild(countryCard);
    }
  });
};

searchBar.addEventListener("input", e => {
  filters.countryName = e.target.value.toLowerCase().trim();
  renderCountries(filters);
});

regionFilter.addEventListener("change", e => {
  filters.countryRegion = e.target.value.toLowerCase();
  renderCountries(filters);
});

countryContainerEl.addEventListener("click", e => {
  if (e.target.parentElement.classList.contains("card")) {
    location.assign(
      `https://tgusterson.github.io/REST-Countries-API-with-color-theme-switcher/country.html#${e.target.parentElement.attributes["data-countryiso"].value}`
    );
  } else if (e.target.parentElement.parentElement.classList.contains("card")) {
    location.assign(
      `https://tgusterson.github.io/REST-Countries-API-with-color-theme-switcher//country.html#${e.target.parentElement.parentElement.attributes["data-countryiso"].value}`
    );
  } else if (
    e.target.parentElement.parentElement.parentElement.classList.contains(
      "card"
    )
  ) {
    location.assign(
      `https://tgusterson.github.io/REST-Countries-API-with-color-theme-switcher//country.html#${e.target.parentElement.parentElement.parentElement.attributes["data-countryiso"].value}`
    );
  } else if (
    e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
      "card"
    )
  ) {
    location.assign(
      `https://tgusterson.github.io/REST-Countries-API-with-color-theme-switcher//country.html#${e.target.parentElement.parentElement.parentElement.parentElement.attributes["data-countryiso"].value}`
    );
  }
});
