function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#Search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#Search-form");
searchFormElement.addEventListener("submit,handleSearchSubmit");
