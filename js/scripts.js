//Back-end logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }

}






//User interface
$(document).ready(function() {
  $("form#leapyear").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
    $("#result").show();
  });


});
