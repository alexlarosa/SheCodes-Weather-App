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
console.log(formatDate(now));
currentDayTime.innerHTML = formatDate(now);


//feature 2
function search(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let header = document.querySelector("header");
  header.innerHTML = `🕵🏼‍♀️ Searching for...`;
  
  let h1 = document.querySelector("h1, .city");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = `🧚🏾‍♂️ Neverland✨`;
  }
}
let form = document.querySelector("form, .new-city");
form.addEventListener("submit", search);

//bonus feature
function changeToImperial(event){
  event.preventDefault();
  let section = document.querySelector(".current-temps");
  section.innerHTML =  `5°`

}
let imperial = document.querySelector("#current-metric")
imperial.addEventListener("click", changeToImperial);


function changeToMetric(event){
  event.preventDefault();
  let section = document.querySelector(".current-temps");
  section.innerHTML =  `41°`

}
let metric = document.querySelector("#current-imperial")
metric.addEventListener("click", changeToMetric);
