function convertTemperature() {
    const fromUnit = document.getElementById("from_unit").value;
    const toUnit = document.getElementById("to_unit").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    let result = 0;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((temperature - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((temperature - 273.15) * 9/5) + 32;
    } else {
        result = temperature;
    }

    document.getElementById("result").value = result.toFixed(2);
}

function switchUnits() {
    const fromUnit = document.getElementById("from_unit").value;
    const toUnit = document.getElementById("to_unit").value;

    document.getElementById("from_unit").value = toUnit;
    document.getElementById("to_unit").value = fromUnit;

    convertTemperature();
}
