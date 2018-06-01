function hideAll() {
  $("#css").hide();
  $("#cSharp").hide();
  $("#php").hide();

}

$(document).ready(function() {
  $("form#buttons").submit(function(event){
      event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var result = (answer1+answer2+answer3+answer4+answer5);

    if (result <= 6) {
      hideAll();
      $("#css").show();
      result.empty();
    } else if (result > 6 && result <= 11) {
      hideAll();
      $("#cSharp").show();
      result.empty();
    } else if (result > 11 && result <= 15) {
      hideAll();
      $("#php").show();
      result.empty();
    } else {
      hideAll();
      alert("you missed one!  Please try again.");
    }
  });
});

// (result < 12 && result => 16)
