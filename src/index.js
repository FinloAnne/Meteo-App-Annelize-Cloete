function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#Search-form-input");
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#Search-form");
searchFormElement.addEventListener("submit,handleSearchSubmit");
