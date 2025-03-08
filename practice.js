/*
write a function that returns 1 if the value input is a prime number and the lowest common multiple if its not.

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return i;
    }
  }

  return 1;
}

console.log(checkPrime(9));

*/

/*
write a program to find the largest prime factor of a given number?
*/

// USING ONE FUNCTION WITH A HELPER FUNCTION
// function getLargestPrimeFactor(num) {
//   for (let i = num; i > 1; i--) {
//     if (num % i == 0) {
//       if (checkIfPrimeNumber(i)) {
//         return i;
//       }
//     }
//   }
// }

// function checkIfPrimeNumber(num) {
//   let isPrimeNumber = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrimeNumber = false;
//     }
//   }

//   return isPrimeNumber;
// }

// USING ONE BIG FUNCTION ONLY
// function getLargestPrimeFactor(num) {
//   let isPrimeNumber = true;

//   for (let i = num; i > 1; i--) {
//     if (num % i == 0) {
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//           isPrimeNumber = false;
//           break;
//         }
//       }
//       if (isPrimeNumber) {
//         return i;
//       }
//     }
//     isPrimeNumber = true;
//   }
// }

// function checkIfPalindrome(word) {
//   let start = 0;
//   let end = word.length - 1;
//   let isPalindrome = true;

//   while (start <= end) {
//     let startChar = word.charAt(start);
//     let endChar = word.charAt(end);

//     if (startChar != endChar) {
//       isPalindrome = false;
//     }

//     start++;
//     end--;
//   }

//   return isPalindrome;
// }

/*
Create a pyramid of "yes"
*/

function createPyramid(size) {
  let output = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      output += "yes ";
    }
    console.log(output);
    output = "";
  }
}

/*
how do i make row two have one more;
*/

createPyramid(10);
