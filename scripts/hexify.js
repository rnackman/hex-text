function hexifyText(input) {
  var characters = input.toUpperCase().replace(/ +/g, '').split('');
  var converted_characters = [];

  for (var i = 0; i < characters.length; i++) {
    if (isNaN(characters[i])){
      if (characters[i].match(/[A-F]/)){
        converted_characters.push(characters[i]);
      } else {
        converted_characters.push(convertCharacter(characters[i]));
      }
    } else {
      converted_characters.push(characters[i]);
    }
  }

  var converted_string = converted_characters.join('');
  var hex_array = converted_string.match(/.{1,6}/g);

  hex_array.forEach(makeSix);
  return hex_array;
}

function convertCharacter(character){
  var codex = {
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
  };
  return codex[character];
}

function makeSix(element, index, array){
  if (element.length < 6){
    var diff = 6 - element.length;
    for (var i = 0; i < diff; i++) {
      element += "0";
    }
    array[index] = element;
  }
}