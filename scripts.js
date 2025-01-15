"use strict";

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
  return max;
}

// function to render the weather data to a table
function weatherTable() {}
