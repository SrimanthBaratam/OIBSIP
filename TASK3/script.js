function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  if (temp === "" || isNaN(temp)) {
    resultDiv.innerHTML = "❌ Please enter a valid number";
    return;
  }

  let value = parseFloat(temp);
  let result;

  if (from === to) {
    result = value;
  } else if (from === "celsius" && to === "fahrenheit") {
    result = (value * 9/5) + 32;
  } else if (from === "fahrenheit" && to === "celsius") {
    result = (value - 32) * 5/9;
  } else if (from === "celsius" && to === "kelvin") {
    result = value + 273.15;
  } else if (from === "kelvin" && to === "celsius") {
    result = value - 273.15;
  } else if (from === "fahrenheit" && to === "kelvin") {
    result = (value - 32) * 5/9 + 273.15;
  } else if (from === "kelvin" && to === "fahrenheit") {
    result = (value - 273.15) * 9/5 + 32;
  }

  resultDiv.innerHTML = `✅ Result: ${result.toFixed(2)} °${to.charAt(0).toUpperCase()}`;
}
