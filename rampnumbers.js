// // Ramp numbers warmup
// function numCheck(num) {
//   if(typeof num === 'number') {
//     return "true";
//   } else {
//     return "false";
//   }
// }
//   console.log
//   console.log(numCheck(560))
//   console.log(numCheck(-456))
//   console.log(numCheck(2600))
//   console.log(numCheck('sfgdsfgsdg'))
//   console.log(numCheck('5679'))


function checkRamp(num) {
  var numStr = num.toString();
    for (var i = 0; i <= numStr.length; i++) {
      if(numStr[i] < numStr[i-1]) {
        return false;
      }
    }
    return true;
}
console.log(checkRamp(1234))
