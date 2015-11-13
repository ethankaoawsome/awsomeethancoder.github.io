function ethangame () {
  
  var name = prompt("What is your name?");
  confirm("Welcome "+name+" are you ready to play this game");
  
  var number = prompt("You are flying in an airplane when an engine catches fire. What do you do (1) jump off the airplane and try to get off before the airplane crashes, or (2) stay in the airplane and hope to land.");
    switch (number) {

      case "1":
        var number2 = prompt("You land in the water unhurt but you are hungry and tired. What do you do, (1) try and catch some fish or (2) find drift wood to sleepgo to sleep?");

        if (number2 == "2") {
          alert("You find some drift wood and you go to sleep. You wake up and find yourself at a Island. You write SOS on the sand and the coast gaurds eventually come to save you. You go to your family and promise youselve you won't ride a plane anytime soon!!! reload the page to do it again.");
        } else {
          alert("You do not catch any fish and die at sea");
        }

      case "2":
        var number3 = prompt("You barely get to the island but you do get there. You are very tierd and hungry. What do you do, (1) go to sleep, or (2) try and find food.");
        if (number3 == "2") {
          alert("You do not find any food and die of tierness. A leapord has his dinner early!!!");
        } else {
          alert("You wake up with renewed energy. You write S.O.S. on the sand an a  helicopter finally comes and flys you off to safety. You go to your family and promise youselve you won't ride a plane anytime soon!!! Reload the page to do it again.");
        }

      default:
        alert("Please enter 1 or 2 to decide your choices.");

    }
}