"use strict";

// Array of Weather objects for Week 7 lab 1
let daysWeather = [
  { day: "Sunday", temperature: 60, rainfall: 0.2 },
  { day: "Monday", temperature: 55, rainfall: 0 },
  { day: "Tuesday", temperature: 63, rainfall: 0.3 },
  { day: "Wednesday", temperature: 57, rainfall: 0.25 },
];

// Function to calculate the average temperature
function avgTemp(weather) {
  let sum = 0;
  for (let i = 0; i < weather.length; i++) {
    sum += weather[i].temperature;
  }
  return sum / weather.length;
}

// Function to calculate the Max rainfall
function maxRainfall(weather) {
  let max = 0;
  for (let i = 0; i < weather.length; i++) {
    if (weather[i].rainfall > max) {
      max = weather[i].rainfall;
    }
  }
  return weather.find((day) => day.rainfall === max).day;
}

// For loop to render the weather data to create a table
for (let i = 0; i < daysWeather.length; i++) {
  const weather = daysWeather[i];

  let tr = document.createElement("tr");
  let tdDay = document.createElement("td");
  let tdTemp = document.createElement("td");
  let tdRain = document.createElement("td");

  tdDay.innerText = weather.day;
  tdTemp.innerText = weather.temperature;
  tdRain.innerText = weather.rainfall;

  tr.appendChild(tdDay);
  tr.appendChild(tdTemp);
  tr.appendChild(tdRain);
  tableBody.appendChild(tr);
}
// Event listener for the Average Temperature button
let tempButton = document.getElementById("tempbutton");
tempButton.addEventListener("click", () => {
  let avgTempValue = avgTemp(daysWeather);
  let tempP = document.getElementById("tempP");
  tempP.innerText = `The average temperature is ${avgTempValue}`;
});
// Event listener for the Max Rainfall day button
let rainButton = document.getElementById("rainbutton");
rainButton.addEventListener("click", () => {
  let maxRainfallValue = maxRainfall(daysWeather);
  let rainP = document.getElementById("rainP");
  rainP.innerText = `The max rainfall is ${maxRainfallValue}`;
});
