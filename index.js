// let oddNumbers = [1,3, ,5, 7, 9, 10, 11, 13, 15, 17, 19, 20];
//1. write a function that will check if this array is ONLY odd numbers 

const containsOnlyOddNumbers = (array) => {
  for (let number of array) {
    if (number % 2 === 0) {
      return false; // If an even number is found, return false
    }
  }
  return true; // If no even numbers are found, return true
}

let oddNumbers = [1, 3, 5, 7, 9, 10, 13, 15, 17, 19, 20];
console.log(containsOnlyOddNumbers(oddNumbers)); // Output: false


// 2. const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194 ]; Write a function that will Calculate the average temperature of this array. Also find the highest temperature and log it. 

const avgfahrenheitTemps = (array) => {
  if(array.length ===0){
    return undefined;
  }
  let sum =0;
  for (let fahrenheitTemps of array){
    sum += fahrenheitTemps;
  }

  let average = sum / array.length;
  return average;{
  }
  
}

let fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
console.log(avgfahrenheitTemps(fahrenheitTemps)); 


// Finding the highest temperature
let highestTemperature = Math.max(...fahrenheitTemps);
console.log("Highest temperature:", highestTemperature); // Output: 194
let lowestTemperature= Math.min(...fahrenheitTemps);
console.log("Lowest temperature:", lowestTemperature);// Output: 32


//3. const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"]; Write a function that will search this array for your favorite fruit. If your favorite fruit isn't found, add it! 

// Initial array of fruits
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Function to add a favorite fruit if it doesn't exist
const favFruits = (newElement) => {
  // Check if the favorite fruit already exists in the array
  let index = fruits.indexOf(newElement);

  // If the index is -1, the fruit is not found in the array
  if (index === -1) {
    // Add the favorite fruit to the indicated place 3 for starting position, 0 for nondeleting, last spot for element to be inserted. 
    fruits.splice(3, 0, newElement);
   
  }

  // Return the modified or original array
  return fruits;
}

// Call the function with your favorite fruit (replace "Passionfruit" with your favorite)
let modifiedArray = favFruits("Passionfruit");
console.log(modifiedArray); 


//4. const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"]; Write a function that will shorten each string to just it's first 3 character ("January" tuns into "Jan")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

const shortenMonth = (array) => {
  let shortenedMonths = [];

  for (let month of array) {
    if (month.length > 3) {
      shortenedMonths.push(month.slice(0, 3));
    } else {
      shortenedMonths.push(month);
    }
  }

  return shortenedMonths;
}

let modifiedMonths = shortenMonth(months);
console.log(modifiedMonths);


//5. const mixedData = [42, 'hello', true, 3.14, "world", false, null, undefined, 'goodbye', 7]; Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 

let mixedData = [42, 'hello', true, 3.14, "world", false, null, undefined, 'goodbye', 7];

const onlyStrings = (array) => {
  let stringsArray = [];
  for (let element of array) {
    if (typeof element === 'string') {
      stringsArray.push(element);//element stays.
    }
  }
  return stringsArray;
}

let newArrayData = onlyStrings(mixedData);
console.log(newArrayData);

//note: Element: 42 - Type: number
//Element: hello - Type: string
//Element: true - Type: boolean
//Element: 3.14 - Type: number
//Element: world - Type: string
//Element: false - Type: boolean
//Element: null - Type: object
//Element: undefined - Type: undefined
//Element: goodbye - Type: string
//Element: 7 - Type: number