var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "2"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "2"
  },
  {
    title: "Arrays in JavaScript can be used to store:__________",
    choices: ["numbers and stirngs", "other arrays", "booleans", "all of the above"],
    answer: "2"
  },
  {
    title: "String value must be enclosed within _________ when being assigned to variables",
    choices: ["commas", "curly brakets", "quotes", "parenthesis"],
    answer: "1"
    },
    {
    title: "A very useful tool used during development and debbuging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "console log"],
    answer: "3"
  }
]

// var questionDiv = document.querySelector('#questions').innerHTML;
var score = 0;
var currentNumber = 0;

// Quiz SetUp

    // Grab buttton from html and create and on click function to display the quiz


var button = document.querySelector('#submit');
// console.log(button);

button.addEventListener("click", startQuiz)


function startQuiz() {
    var myTimer = setInterval(function() {
        // grab the number thatis on the screen
        var numberStart = parseInt(document.querySelector('#time').innerHTML);
        // subtract 1 from that number
        var countDownNumber = numberStart - 1;
        // put that new number back
        document.querySelector('#time').innerHTML = countDownNumber;
    
        // if countdownNumber is 0
        if (countDownNumber === 0) {
            // stop the timer
            clearTimeout(myTimer);
        }
    }, 1000)

   //Grab html element and display question

    function nextQuestion (i){
        document.getElementById('question').innerHTML = questions[i].title
        // loop through the choices array and innerhtml each item
        document.getElementById('answer'+i).innerHTML = questions[i].choices[j]
    }
   
    
    // global variable that ties to my question index that ties the quesitons and answers.

    //scores: if button clicked has a property called correct you can increment score variable.

    //on question 5 show resuts.

    // button clicks



    // for (i = 0; i < questions.length; ++){

    //     questionDiv.questions.choices.innerHTML
    // }




    

    // function createQuestion(){
    //     for (var i=0; i < questions[this.currentNumber].choices.length;i++){
    //         document.forms.radioAnswers.elements.choice[i].checked = false;
    //     }
    //     var question=document.getElementById("question");
    //     question.innerHTML = allQuestions[this.currentNumber].question;
    //     var point  = document.getElementById("point");
    //     point.innerHTML="<span>score: "+score+"</span>";
    //     createChoices();
    

    // for each quesiontc
        // display question

        // var questionSpace = document.querySelector('#questions').innerHTML;
        // var questionQuiz = questions.title;
        // var output = [];
        // var answers= "";
        // for (i = 0; i < questionQuiz.length; ++){

        // }
        

        // -- reach into html grabe question area
        // -- assign the question fromt he question obj to the innner html
        // display choices as buttons
        // on click of button
            // display if tru or false
        // if question is question 5
            // display final results

    //
}









