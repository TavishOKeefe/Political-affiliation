$(document).ready(function() {
  $("form#politicalInfo").submit(function(event) {
    event.preventDefault();
    var partyScores = [0, 0, 0];
    var question1Answer = parseInt($("#question1").val());
    var question2Answer = parseInt($("#question2").val());
    var question3Answer = parseInt($("#question3").val());
    var question4Answer = parseInt($("#question4").val());
    var question5Answer = parseInt($("#question5").val());
    var question6Answer = parseInt($("#question6").val());
    partyScores[question1Answer]++;
    partyScores[question2Answer]++;
    partyScores[question3Answer]++;
    partyScores[question4Answer]++;
    partyScores[question5Answer]++;
    partyScores[question6Answer]++;
    if(partyScores[0] > partyScores[1] && partyScores[0] > partyScores[2]) {
      $("#affiliation1").show();
      $("#quiz").hide();
    } else if (partyScores[1] > partyScores[0] && partyScores[1] > partyScores[2]) {
      $("#affiliation2").show();
      $("#quiz").hide();
    } else if (partyScores[2] > partyScores[0] && partyScores[2] > partyScores[1]) {
      $("#affiliation3").show();
      $("#quiz").hide();
    } else if (partyScores[0] === partyScores[1] && partyScores[0] > partyScores[2]) {
      $("#affiliation12").show();
      $("#quiz").hide();
    } else if (partyScores[0] === partyScores[2] && partyScores[0] > partyScores[1]) {
      $("#affiliation13").show();
      $("#quiz").hide();
    } else if (partyScores[1] === partyScores[2] && partyScores[1] > partyScores[0]) {
      $("#affiliation23").show();
      $("#quiz").hide();
    } else if (partyScores[0] === partyScores[1] && partyScores[0] === partyScores[2]) {
      $("#affiliation123").show();
      $("#quiz").hide();
    }
  });
});
