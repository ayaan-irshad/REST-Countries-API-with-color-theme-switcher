const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.responseType = "json";
xhr.onload = () => {
  allCountries = xhr.response;
  filteredCountries = allCountries;
  renderCountries(filters);
};
xhr.send();
