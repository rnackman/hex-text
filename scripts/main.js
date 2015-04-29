$(document).ready(function(){
  addSubmitListener();
})

function addSubmitListener() {
  $('button').on('click', function(){
    displayResults(getInput());
  });

  $('#user_text').keypress(function(e) {
    if (e.which == 13) {
      displayResults(getInput());
    }
  });
}

function getInput() {
  return hexifyText($('#user_text').val());
}

function displayResults(hex_array) {
  $('#results').html('');
  hex_array.forEach(displayColor);
}

function displayColor(element, index, array) {
  var width = 100 / array.length; 
  $('#results').append(colorDiv(element, width));
}

function colorDiv(element, width){
  return "<div class='color-div' style='background-color:#" + element + "; width:"+width+"%;'></div>";
}