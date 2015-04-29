function hexifyText(input) {
  var string = input;
  var converted_string = '';

  for (var i = 0; i < string.length; i++) {
    converted_string += string.charCodeAt(i).toString(16);
  }
  debugger;
  var hex_array = converted_string.match(/.{1,6}/g);

  hex_array.forEach(makeSix);
  return hex_array;
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