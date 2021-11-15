function fahrenheitToCelsius(temp_fahrenheit) {
  const result = (temp_fahrenheit - 32) / 1.8;
  return result.toFixed(1);
}

console.log(fahrenheitToCelsius(95));
