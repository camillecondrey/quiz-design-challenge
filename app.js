
var questions = [{
	question: 'Which of the following is the name of Arya Starks pet dire wolf?',
	answer: ['Summer', 'Nymeria', 'Ghost', 'Winter'],
	correct: 1,
	feedback: 'Correct answer is Nymeria'
}, {
	queston: 'Which family has the Stag crest?',
	answer: ['Baratheon', 'Stark', 'Lannister', 'Tyrell'],
	correct: 0,
	feedback: 'Correct answer is Baratheon'
}, {
	question: 'What is the name of the explosive that Cersei Lannister uses to destroy her enemies in the season 6 finale?',
	answer: ['Dragonfire', 'Green Poison', 'Wildfire', 'Liquid Death'],
	correct: 2,
	feedback: 'Correct answer is Wildfire'
}, {
	question: 'Which family has the house words "Winter is coming"?',
	answer: ['Lannister', 'Greyjoy', 'Martell', 'Stark'],
	correct: 3,
	feedback: 'Correct answer is Stark'
}, {
	question: 'Which family is associated with the song "The Rains of Castermere"?',
	answer: ['Martell', 'Tully', 'Tyrell', 'Lannister'],
	correct: 3,
	feedback: 'Correct answer is Lannister'
}, {
	question: 'Which sense did Arya Stark temporarily lose?',
	answer: ['sense of sight', 'sense of hearing', 'sense of smell', 'sense of taste'],
	correct: 0,
	feedback: 'Correct answer is her sense of sight'
}, {
	question: 'What is Jamie Lannisters nickname?',
	answer: ['one armed knight', 'king slayer', 'golden boy', 'back stabber'],
	correct: 1,
	feedback: 'Correct answer is King Slayer'
}, {
	question: 'What is The Hound’s real name?',
	answer: ['Sandor Clegane', 'Gregor Clegane', 'Bronn Clegane', 'Jorah Clegane'],
	correct: 0,
	feedback: 'Correct answer is Sandor Clegane'
 }];

var questionCounter = 0; //tracks questions number//
var selections = []; //array containing user choices//
var quiz = $('#quiz'); //quiz div object//
var score = 0;
// var currentScore = 0;
//display initial question//

$('.next').click(function(event){
	event.preventDefault();
	var checked = $('input[name="answer"]:checked').val();	
	if (!checked){
	alert('Please make a selection');
	}
	else {
	if (checked === questions[questionCounter].correct) {
		alert("Correct Answer!");
		score++
	}
	else {
		alert("Incorrect Answer. " + questions[questionCounter].feedback);
	}	
	questionCounter++;
	displayNext();
	}
})

$('.start').click(function(event){
	displayNext();
	$('.next').removeClass('hidden')
	$('.start').addClass('hidden')
}) 

$('.start-over').click(function(event){
	$('.start-over').addClass('hidden')
	$('.next').removeClass('hidden')
	score = 0;
	questionCounter = 0;
	displayNext();
})

//if no user selection, progress is stopped//




function createQuestionElement(index) {
	var qElement = $('<div>', {id: 'question'}, '</div>');

	var header = $('<h2>Question ' + (index + 1) + ':</h2>');
	qElement.append(header);

	var question = $('<p>').append(questions[index].question);
	qElement.append(question);

	var radioButtons = createRadios(index);
	qElement.append(radioButtons);

	var currentScore = $('<p>').append((index + 1) + " out of " + questions.length);
	qElement.append(currentScore);

	var currentProgress = $('<p>').append(score + " correct out of " + questions.length);
	qElement.append(currentProgress);

	
	return qElement;
}

//creates a list of the answer choices as radio inputs//
function createRadios(index) {
	var radioList = $('<ul>');
	
	for (var i=0; i < questions[index].answer.length; i++) {
	var	item = $('<li>');
		var input = '<input type="radio" name="answer" value=' + i + ' />';
		input += questions[index].answer[i];
		item.append(input);
		radioList.append(item);
}
return radioList;
}

//reads the user selection and pushes the value to an array//
function choose(){
	selections.push($('input[name="answer"]:checked').val());
}

//displays next requested element//
	function displayNext() {
	quiz.fadeOut(function(){
		$('#quiz').empty();


		if (questionCounter < questions.length){
			var nextQuestion = createQuestionElement(questionCounter);

		quiz.append(nextQuestion).fadeIn()	
		}

		else {
			var score = displayScore();
			quiz.append(score).show();
			$('.next').addClass('hidden')
			$('.start-over').removeClass('hidden')
		}
	})
}			


//conputes score and retruns a paragraph element to be displayed//
function displayScore(){
	var score = $('<p>',{id: 'question'});

	var numCorrect = 0;
	for (var i=0; i<selections.length; i++) {
		if (selection[i] === questions[i].correct) {
			numCorrect++;
		}
	}

	score.append('You got ' + numCorrect + ' questions out of ' + questions.length + ' right!');
	return score;
}
(function(){
})();
