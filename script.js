function toCelsius(value, unit) {
  if (unit === "C") return value;
  if (unit === "F") return (value - 32) * 5 / 9;
  return value - 273.15;
}

function fromCelsius(celsius, unit) {
  if (unit === "C") return celsius;
  if (unit === "F") return celsius * 9 / 5 + 32;
  return celsius + 273.15;
}

function convertTemperature() {
  const input = document.getElementById("value");
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");
  const value = Number(input.value);

  if (input.value.trim() === "" || Number.isNaN(value)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  const celsius = toCelsius(value, from);
  const converted = fromCelsius(celsius, to);

  if (to === "K" && converted < 0) {
    result.textContent = "Temperature cannot be below absolute zero.";
    return;
  }

  const symbols = { C: "°C", F: "°F", K: "K" };
  result.textContent = `${value} ${symbols[from]} = ${converted.toFixed(2)} ${symbols[to]}`;
}

function resetConverter() {
  document.getElementById("value").value = "";
  document.getElementById("from").value = "C";
  document.getElementById("to").value = "F";
  document.getElementById("result").textContent = "Enter a temperature to begin.";
}
