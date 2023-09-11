const questions=[
    {
        question:"Which is the largest animal in the world",
        answer:[
            {   text:"Shark",correct:false},
            {   text:"Blue Whale",correct:true},
            {   text:"Elephant",correct:false},
            {   text:"Tiger",correct:false},
        ]
    },
    {
        question:"Which is the National bird of India",
        answer:[
            {   text:"Cock",correct:false},
            {   text:"Pigeon",correct:false},
            {   text:"Peacock",correct:true},
            {   text:"parrot",correct:false},
        ]
    },
    {
        question:"Javan movie directed by whom",
        answer:[
            {   text:"Atlee",correct:true},
            {   text:"Lokesh",correct:false},
            {   text:"TTF",correct:false},
            {   text:"Shankar",correct:false},
        ]
    },
    {
        question:"Select blue",
        answer:[
            {   text:"bluee",correct:false},
            {   text:"blue",correct:true},
            {   text:"Blue",correct:false},
            {   text:"Bluee",correct:false},
        ]
    },
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz()
{
    
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML= questionNo+"."+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();