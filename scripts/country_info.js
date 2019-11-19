let country;
let iso = location.hash.slice(1);

const xhr = new XMLHttpRequest();
xhr.open("GET", `https://restcountries.eu/rest/v2/alpha/${iso}`);
xhr.responseType = "json";
xhr.onload = () => {
  country = xhr.response;
  renderCountryInfo(country);
};
xhr.send();

const backButton = document.querySelector(".button--shadow");

backButton.addEventListener("click", () => {
  location.assign("./index.html");
});

const countryInfoContainerEl = document.querySelector(".country-section");

const createList = obj => {
  let myArr = [];
  obj.forEach(element => {
    if (element.name) {
      myArr.push(element.name);
    } else {
      myArr.push(element);
    }
  });
  return myArr.join(", ");
};

const renderCountryInfo = country => {
  countryInfoContainerEl.innerHTML = `
<div class="flag">
  <img src="${country.flag}" alt="Flag" class="country-flag"/>
</div>
<div class="country-info">
  <h2>${country.name}</h2>
  <div class="country-info__lists">
    <ul>
      <li>
        <span class="list-title">Native Name:</span> ${country.nativeName}
      </li>
      <li>
        <span class="list-title">Population:</span> ${country.population
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </li>
      <li><span class="list-title">Region:</span> ${country.region}</li>
      <li>
        <span class="list-title">Sub Region:</span> ${country.subregion}
      </li>
      <li>
        <span class="list-title">Capital:</span> ${country.capital}
      </li>
    </ul>
    <ul>
      <li>
        <span class="list-title">Top Level Domain: ${
    country.topLevelDomain
    }</span>
      </li>
      <li>
        <span class="list-title">Currencies: ${createList(
      country.currencies
    )}</span>
      </li>
      <li>
        <span class="list-title">Languages: ${createList(
      country.languages
    )}</span>
      </li>
    </ul>
  </div>
  <div class="country-info__border-countries">
    <h3 class="list-title">Border Countries:</h3>
    <ul>
      <li class="country-button">${createList(country.borders)}</li>
    </ul>
  </div>
</div>`;
};
