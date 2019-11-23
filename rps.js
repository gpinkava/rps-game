
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.
var game_result;
function play(userChoice){
	var computerChoice = Math.random();
	if (computerChoice < 0.34){
		computerChoice = "rock";
	}
	if (computerChoice > 0.34 && computerChoice < 0.68){
		computerChoice = "paper";
	}
	if (computerChoice > 0.68){
		computerChoice = "scissors";
	}

	game_result = compare(userChoice,computerChoice);
	document.getElementById("result").innerHTML = game_result;
	document.getElementById("user").innerHTML = userChoice;
	document.getElementById("computer").innerHTML = computerChoice;


}



//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference. 
var compare = function(choice1, choice2){
	if (choice1 == choice2 ){
		return "Tie! Play Again";
		document.getElementById("result").className = "results2";
	}
	else if( (choice1 == "rock") && (choice2 == "scissors" )){
		return "WIN";
		document.getElementById("result").className = "results3";
	}
	else if((choice1 == "scissors") && (choice2 == "paper") ){
		return "WIN";
		document.getElementById("result").className = "results3";
	}
	else if((choice1 == "paper") && (choice2 == "rock" ) ){
		return "WIN";
		document.getElementById("result").className = "results3";
	}
	else if((choice1 == "rock") && (choice2 == "paper") ){
		return "LOSS";
	}
	else if((choice1 == "paper") && (choice2 == "scissors") ){
		return "LOSS";
	}
	else if((choice1 == "scissors") && (choice2 == "rock") ){
		return "LOSS";
	}


}
