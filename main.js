 const quizDB  = [
    {
        questions: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hyper To MarkUp language",
        c: "HyperText MarkUp Language",
        d: "HyperText MakeUp Language",
        ans:"ans3"
    },
    {
        questions: "Q2: What is the full form of CSS?",
        a: "Caste Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading Super Sheet",
        d: "Cartoon Style Sheet",
        ans:"ans2"
    },
    {
        questions: "Q3: What is the full form of HTTP?",
        a: "Hyper To Transfer Protocol ",
        b: "Hyper Text The Protocol",
        c: "Hey Text Transfer  Protocol",
        d: "HyperText Tranfer Protocol",
        ans:"ans4"
    },
    {
        questions: "Q4: What is the full form of JS?",
        a: "Java Sheet",
        b: "Java Style ",
        c: "Java Script",
        d: "Java Super",
        ans:"ans3"
    }
];
const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');//for finding option answer

const showScore = document.querySelector('#showScore');

let questionCnt = 0;
let score = 0;

const loadQuestion = () =>  {

    const questionList = quizDB[questionCnt];

    question.innerText = questionList.questions; 

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currOption) => {
       if(currOption.checked){
           answer = currOption.id;
       }
    });
    return answer;
};
   
const deselectAll=()=>{
    answers.forEach((currOption)=> currOption.checked=false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCnt].ans){
        score++;
    };

    questionCnt++;

    deselectAll();

    if(questionCnt < quizDB.length){
        loadQuestion(); 
    }
    else{
        showScore.innerHTML =  `
        <h3>You Scored ${score}/${quizDB.length}</h3>
        <button class = "btn" onclick="location.reload()">Play Again!</button>
        `;
        
        showScore.classList.remove('scoreArea');
    }
});