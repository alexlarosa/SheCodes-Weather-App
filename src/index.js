//feature 1
let now = new Date();

let currentDayTime = document.querySelector("section, #day-and-time");

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesaday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes =  now.getMinutes ();

  let currentDate = `${day} ${hour}:${minutes}`;
  return currentDate;
}
currentDayTime.innerHTML = formatDate(now);

function displayWeatherCondition(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".current-temps").innerHTML = `${Math.round(
    response.data.main.temp)}°`;
  document.querySelector(".current-weather").innerHTML =
    response.data.weather[0].main.toLowerCase();
  document.querySelector("#celciusHighToday").innerHTML = 
    `${Math.round(response.data.main.temp_max)} °C`;
  document.querySelector("#celciusLowToday").innerHTML = 
    `${Math.round(response.data.main.temp_min)} °C`;
  document.querySelector("#windSpeed").innerHTML = `${Math.round(response.data.wind.speed)} kmp`;
}

function showCity(city) {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "aea833a90485bad517aeb7963cee7156";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  showCity(city);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "aea833a90485bad517aeb7963cee7156";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let searchForm = document.querySelector(".container");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".geolocation");
currentLocationButton.addEventListener("click", getCurrentLocation);

showCity("Madrid");
