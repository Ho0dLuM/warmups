
function checkPalindrome(string) {
    // Remove punctuation, change string to lower case.
    string = string.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    // Compare the string with it's reversed version.
    return string === string.split('').reverse().join('');
}
console.log(checkPalindrome("A man, a plan, a canal, Panama"));
