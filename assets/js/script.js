 /*list of arry objects
 using object literals to represent the individual questions
 and an arry to hold all of the questions
 */
const myQuestion = [
    {
        question:"1. what is the currency of Denmark?",
        a:"Peso",
        b:"Krone",
        c:"Euro",
        d:"Pound",
        Correct:"b",
    },
    {
        question:"2. what is the Capital of NewZealand?",
        a:"Port Mresby",
        b:"Papua NewGuinea",
        c:"Canberra",
        d:"Wellington",
        Correct:"d",
    },
    {
        question:"3. what is the smallet planet in our Solar System?",
        a:"Mercury",
        b:"Jupiter",
        c:"Mars",
        d:"Earth",
        Correct:"a",
    },   
    {
        question:"4. what country has won the most World Cups?",
        a:"Germany",
        b:"Italy",
        c:"Brazil",
        d:"Arigentina",
        Correct:"c",
    },
    {
        question:"5. what country drinks the most coffee per capita?",
        a:"Finland",
        b:"Sweden",
        c:"Iceland",
        d:"Norway",
        Correct:"a",
    },
    {
        question:"6. what was the most-watched Netflix series of 2022?",
        a:"Money Heist",
        b:"Stranger Things",
        c:"Game of Thrones",
        d:"The walking Dead",
        Correct:"b",
    },   
    {
        question:"7. How far is a half Marathon in miles?",
        a:"13.1 miles",
        b:"12 miles",
        c:"15 miles",
        d:"24.8 miles",
        Correct:"a",
    },
    {
        question:"8. which is the Least populated city in the World?",
        a:"Vatican city",
        b:"Kansas city",
        c:"Oklahoma city",
        d:"Seattle",
        Correct:"a",
    },
    {
        question:"9. what country has the highest life expectancy?",
        a:"Japan",
        b:"Switzerland",
        c:"Macau,China",
        d:"Hong kong",
        Correct:"d",
    },   
    {
        question:"10. when and where was the inaugural football cup held?",
        a:"1934, Italy",
        b:"1930, Uruguay",
        c:"1924, Pars",
        d:"1927, Amsterdam",
        Correct:"b",
    },   

];

/*  Declare constant for DOM elements
HTML elements and store references to them in variables.
Using DOM method query selector all choiceElements
and we store a referenes these elements
*/
const quiz = document.getElementById('quiz');
const choiceEls = document.querySelectorAll('.choice');
const questionEl = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const btnPrevious = document.getElementById('previous');
const submit = document.getElementById('submit');

//initial value of created variables
let currentQuiz = 0;
let score = 0;

//using load quiz function
//setting output variables

loadQuiz();
function loadQuiz() {
    unselectedChoices();
    let currentQuizData = myQuestion[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
   
}
function unselectedChoices() {
    choiceEls.forEach(choiceEl => choiceEl.checked = false);
}
function selected() {
    let choice;
    choiceEls.forEach(choiceEl => {
        if(choiceEl.checked) {
            choice = choiceEl.id;
        }
    });
    return choice;
}



//below using the javascript forEach method which loop over each element in the alts variable
//used for both selected and unselected choiceElements.
/** 
*code taken from www.gamedevacademy.org
*alts.forEach(function(element,index){
*element.textContent=q.alternatives[index]} 
*/
