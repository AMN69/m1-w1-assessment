// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    return false;
  }
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
    return false;
  }
  
  if ((a > b) && (a > c)) {
    return a;
  } else if ((b > a) && (b > c)) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (typeof numbers != 'object') {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] != 'number') {
      return false;
    }
  }
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array

function maxOfArray(numbers) {
  if (typeof numbers != 'object' || numbers.length === 0) {
    return false;
  }
  let greatNumber = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > greatNumber) {
      greatNumber = numbers[i];
    }
  }
  return greatNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = strings[0]; 
  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let isInTheArr = false;
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      isInTheArr = true;
    }
  }
  return isInTheArr;
}

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
  let isDuplicate = false;
  if (wordsArr.length === 0) {
    return isDuplicate;
  }
  for (i = 0; i < wordsArr.length; i++) {
    for (j = i + 1; j < wordsArr.length; j++) {
      if (wordsArr[j] === wordsArr[i]) {
        isDuplicate = true; 
      }
    }
    if (!isDuplicate) {
      return wordsArr[i];
    }
    isDuplicate = false;
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = personObj.firstName + " " + personObj.lastName;
  return fullName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNum = [0][0];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largestNum) {
        largestNum = matrix[i][j];
      }
    }
  }
  return largestNum;
}
