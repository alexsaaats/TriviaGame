// jquery document iniatlize and page load actions
$(document).ready(function() {
	console.log("Trivia Game has started")

var timeLeft = 5;
var activequestion = null;

var questions = 
      [
        {
          question: "What is the capital of United Kingdom?",
          choices: ["Manchester", "Birmingham", "London", "Birmingham"],
          answer: 2
        },
        
        {
          question: "What is the capital of United States?",
          choices: ["California", "New York", "Miami", "Florida"],
          answer: 1
        }
        
        
      ];

// show the first question
$("#question").text(questions[0].question);
window.activequestion = 0;
$("#questionans1").text(questions[0].choices[0]);
$("#questionans2").text(questions[0].choices[1]);
$("#questionans3").text(questions[0].choices[2]);
$("#questionans4").text(questions[0].choices[3]);

// start timer for the question shown
$("#questiontimer").text(timeLeft);



//var timecount = document.getElementById('some_div');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    
    timeout();
  } else {
  	$("#questiontimer").text(timeLeft);
    timeLeft--;
  }
};

// function for what happens when the timer runs out on a question
function timeout() {
	console.log("timeout");
	//clearTimeout(timerId);
	//$("#answers").html("<h3 style='color:#ff0000;'>" + "You are out of time! Moving to next question..." + "</h3>")
	window.alert("You are out of time, next question");
	window.activequestion++;
	console.log(window.activequestion);
	window.timeLeft = 5000;
	moveto2();
};

//move to 2nd question
function moveto2() {
	if (window.activequestion === 1) {
		
		countdown();
		$("#question").text(questions[1].question);
		$("#questionans1").text(questions[1].choices[0]);
		$("#questionans2").text(questions[1].choices[1]);
		$("#questionans3").text(questions[1].choices[2]);
		$("#questionans4").text(questions[1].choices[3]);
}
};

// recognize the right or wrong answer

// count the right or wrong answer

// quiz has ended screen and actions

//End the document ready function
});


