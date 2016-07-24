// Up Down: Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.
//
// Input: An array of numbers (e.g [6,3,5,4,3,4,4,5])
//
// Output: An array of up down strings (e.g. ["down","up","down","down","up","even","up"])

function upDown(arr) {
  return arr.slice(1).map(function(n, i) {
    return arr[i] > n ? 'down' : arr[i] < n ? 'up' : 'even';
  });
}
console.log(upDown([6,3,5,4,3,4,4,5]));
