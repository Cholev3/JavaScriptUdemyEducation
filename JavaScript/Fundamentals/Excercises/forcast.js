//Create a function with expected name;
function printForecast(arr) {
  //How to create the expected long string?
  //A) Create a for loop to iterate through the values of the given array;
  //B) Days variable should be set to the index;
  //C) Temp variable should be set to index - 1;
  //D) Create a string variable which will be concatenated with every iteration;

  let forecast = `...`;

  for (let i = 0; i < arr.length; i++) {
    let days = i + 1;
    let temp = arr[i];
    forecast += ` ${temp} C in ${days} days ...`;
  }
  console.log(forecast);
}

printForecast([17, 21, 23]);
