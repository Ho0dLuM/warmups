
function count(word, letter) {
  var numbers = 0;
  for (var i = 0; i < word.length; i++) {
    if(word[i].toLowerCase() === letter.toLowerCase()){
      numbers++;
    }
  }
  if (numbers === 0) {
    return "Not Found"
  } else {
    return numbers;
  }
};
console.log(count("jellyfish", "h"));
