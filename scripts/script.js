$(document).ready(function(){
  
  $("#spiritAnimal").hide();
  $('.nameFacts').hide();  

  $('#submitName').click(function() {
    let userName = $('#userName').val()
    $('.container').hide();
    $(".nameFacts").show()
    $("#spiritAnimal").show();
    var reversedName = reverseName(userName);
    document.getElementById("name").innerHTML = reversedName;
    console.log(reversedName);
  });


});

function reverseName(name) {
  var nameArray = name.split('')
  let length = nameArray.length;
  var reversedName = "";
  for (let i = length-1; i >= 0; i--) {
    reversedName += nameArray[i];
  }
  return reversedName;
}