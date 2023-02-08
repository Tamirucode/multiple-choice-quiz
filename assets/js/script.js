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

//below using the javascript forEach method which loop over each element in the alts variable
//used for both selected and unselected choiceElements.
/** 
*code taken from www.gamedevacademy.org
*alts.forEach(function(element,index){
*element.textContent=q.alternatives[index]} 
*/
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

// add event listner to submit button
submit.addEventListener('click', () => {
    const choice = selected();
    
    if(choice) {
       if(choice === myQuestion[currentQuiz].Correct) {
           score++;
       }
      currentQuiz++;
       if(currentQuiz < myQuestion.length) {
           loadQuiz();
       } else if (score === myQuestion.length) {
 //using temperate literals user score=10      
                quiz.innerHTML = `
                <h2>Congratulations! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 9) {
//add temperate literals  user score=9     
                quiz.innerHTML = `
                <h2>Very Good! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick ="location.reload()">Try Again</button>
                `;
        } else if (score === 8) {
//using temperate literals user score=8     
                quiz.innerHTML = `
                <h2>Good! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 7) {
//using temperate literals user score=7   
                quiz.innerHTML = `
                <h2>Almost there! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 6) {
//using temperate literals user score=6    
                quiz.innerHTML = `
                <h2>That is just ok! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 5) {
//using temperate literals user score=5   
                quiz.innerHTML = `
                <h2>Just you passed! <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 4) {
//using temperate literals user score=4    
                quiz.innerHTML = `
                <h2>You failed but do it again <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 3) {
//using temperate literals user score=3   
                quiz.innerHTML = `
                <h2>You failed but do it again <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;                
         } else if (score === 2) {
//using temperate literals user score=2   
                quiz.innerHTML = `
                <h2>You failed but do it again <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
         } else if (score === 1) {
//using temperate literals user score=1   
                quiz.innerHTML = `
                <h2>You failed but do it again <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else if (score === 0) {
//using temperate literals user score=0   
                quiz.innerHTML = `
                <h2>You really need to do better <br/>You scored   ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
        } else {
                quiz.innerHTML = `
                <h2>You got ${score}/${myQuestion.length} </h2>
                <h2>  ${(score/myQuestion.length)*100}% </h2>
                <button onclick = "location.reload()">Try Again</button>
                `;
       }
    //add event listener previous button 
function previousQuestion(){
    if(currentQuiz === 0){
        alert("there is no page when you back");
    }else{
        currentQuiz--;
        loadQuiz();
    }
}
btnPrevious.addEventListener('click',previousQuestion);
  
  
    }

});




