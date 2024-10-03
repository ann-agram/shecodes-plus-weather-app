function search(event) {
  //updates city in H1 element
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  console.log(`Hello from ` + cityElement.innerHTML);
  //calls API and returns info
  let apiKey = "5fd9404do59a324f94f7bfet0f86ba4b";
  let query = cityElement.innerHTML;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=imperial`;
  //updates hero temperature to API response
  function updateTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let heroTemperature = document.querySelector(".current-temperature-value");
    heroTemperature.innerHTML = temperature;
  }
  axios.get(apiURL).then(updateTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function updateTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let heroTemperature = document.querySelector(".current-temperature-value");
  heroTemperature.innerHTML = temperature;
}
let cityElement = document.querySelector("#current-city");
let apiKey = "5fd9404do59a324f94f7bfet0f86ba4b";
let query = cityElement.innerHTML;
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=imperial`;
axios.get(apiURL).then(updateTemperature);
