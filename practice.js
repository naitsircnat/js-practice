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
- divide number by numbers smaller than itself but >1 to see if got remainder;
- if yes, check if it's a prime number

if inner loop can be completed, return i. Else, break the loop and go back to the outer loop
*/

// function getLargestPrimeFactor(num) {
//   for (let i = num; i > 1; i--) {
//     if (num % i == 0) {
//       if (checkIfPrimeNumber(i)) {
//         return i;
//       }
//     }
//   }
// }

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

// function checkIfPrimeNumber(num) {
//   let isPrimeNumber = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrimeNumber = false;
//     }
//   }

//   return isPrimeNumber;
// }
