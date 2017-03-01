(function () {
var questions = [{
	question: 'Which of the following is the name of Arya Stark’s pet dire wolf?',
	answer: ['Summer', 'Nymeria', 'Ghost', 'Winter'],
	correct: 1
}, {
	queston: 'Which family has the Stag crest?',
	answer: ['Baratheon', 'Stark', 'Lannister', 'Tyrell'],
	correct: 0
}, {
	question: 'What is the name of the explosive that Cersei Lannister uses to destroy her enemies in the season 6 finale?',
	answer: ['Dragonfire', 'Green Poison', 'Wildfire', 'Liquid Death'],
	correct: 2
}, {
	question: 'Which family has the house words "Winter is coming"?',
	answer: ['Lannister', 'Greyjoy', 'Martell', 'Stark'],
	correct: 3
}, {
	question: 'Which family is associated with the song "The Rains of Castermere"?',
	answer: ['Martell', 'Tully', 'Tyrell', 'Lannister'],
	correct: 3
}, {
	question: 'Which sense did Arya Stark temporarily lose?',
	answer: ['sense of sight', 'sense of hearing', 'sense of smell', 'sense of taste'],
	correct: 0
}, {
	question: 'What is Jamie Lannisters nickname?',
	answer: ['one armed knight', 'king slayer', 'golden boy', 'back stabber'],
	correct: 1
}, {
	question: 'What is The Hound’s real name?',
	answer: ['andor Clegane', 'Gregor Clegane', 'Bronn Clegane', 'Jorah Clegane'],
	correct: 0
}];

var questionCounter = 0; //tracks questions number//
var selections = []; //array containing user choices//
var quiz = $('#quiz'); //quiz div object//

//display initial question//
displayNext();

$('.button').click(function(event){
	event.preventDefault();
	questionCounter++;
	displayNext();
})
 
//click handler for the 'next/start button'//
$('.button').click(function(event){
	event.preventDefault();

 if(quiz.is(':animated')) {        
      return false;
    }
    choose();


//if no user selection, progress is stopped//
if (isNaN(selections[questionCounter])){
	alert('Please make a selection');
}
else {
	questionCounter++;
	displayNext();
}
});



function createQuestionElement(index) {
	var qElement = $('<div>', {id: 'question'});

	var header = $('<h2>Question ' + (index + 1) + ':</h2>');
	qElement.append(header);

	var question = $('<p>').append(questions[index].question);
	qElement.append(question);

	var radioButtons = createRadios(index);
	qElement.append(radioButtons);

	return qElement;
}

//creates a list of the answer choices as radio inputs//
function createRadios(index) {
	var radioList = $('<ul>');
	var input = '';
	for (var i=0; i < questions[index].answer.length; i++) {
	var	item = $('<li>');
		input = '<input type="radio" name="answer" value=' + i + ' />';
		input += questions[index].answer[i];
		item.append(input);
		radiolist.append(item);
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
		$('#question').remove();

		if (questionCounter < questions.length){
			var nextQuestion = createQuestionElement(questionCounter);

		quiz.append(nextQuestion).fadeIn();
			if (!(isNaN(selections[questionCounter]))) {
				$('input[value='+selections[questionCounter]+ ']').prop('checked', true);
			}	



if(questionCounter === 1){
	$('.start').hide();
	$('.next').show();
}
else if (questionCounter === 0){
	$('.next').hide();
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
})();
