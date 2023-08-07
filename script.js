const questions = [
    {
        question: " ‘The Land of the Morning Calm’ is: ",
        answers: [
            {text: "Japan", correct: false},
            {text: "Korea", correct: true},
            {text: "Indonesia", correct: false},
            {text: "Malaysia", correct: false},
        ]
    },
    {
        question: " Cuban economy is based on: ",
        answers: [
            {text: " Sugarcane cultivation", correct: true},
            {text: "Dairying", correct: false},
            {text: "Fishing", correct: false},
            {text: "Iron-ore mining", correct: false},
        ]
    },

    {
        question: " Pearl Harbour, (the target of Japanese attack on the American fleet) is in: ",
        answers: [
            {text: " Hawaiian Islands", correct: true},
            {text: "Singapore", correct: false},
            {text: "Japan", correct: false},
            {text: "Philippines", correct: false},
        ]
    },

    {
        question: " National Sports Game of China is?",
        answers: [
            {text: "Football", correct: false},
            {text: "Cricket", correct: false},
            {text: "Table Tennis", correct: true},
            {text: "Badminton", correct: false},
        ]
    },

    {
        question: " The smallest bone in the human body is about the size of ?",
        answers: [
            {text: "Head of a Pin", correct: false},
            {text: "An eyelash", correct: false},
            {text: "Grain of Sand", correct: false},
            {text: "Grain of Rice", correct: true},
        ]
    },

    {
        question: " What is the most common surname in the United States? ",
        answers: [
            {text: "Smith", correct: true},
            {text: "Alex", correct: false},
            {text: "Jack", correct: false},
            {text: "James", correct: false},
        ]
    },

    {
        question: " What is the highest-rated film on IMDb as of January 1st, 2022? ",
        answers: [
            {text: "Forrest Gump (1994)", correct: false},
            {text: "The Godfather (1972)", correct: false},
            {text: "Jai Bhim (2021)", correct: false},
            {text: "The Shawshank Redemption (1994)", correct: true},
        ]
    },

    {
        question: " What is a group of pandas known as? ",
        answers: [
            {text: "A bloat", correct: false},
            {text: "An embarrassment", correct: true},
            {text: "A skulk", correct: false},
            {text: "A pandemonium", correct: false},
        ]
    },

    {
        question: " In what country is the Chernobyl nuclear plant located? ",
        answers: [
            {text: "Russia", correct: false},
            {text: "China", correct: false},
            {text: "Ukraine", correct: true},
            {text: "India", correct: false},
        ]
    },

    {
        question: " Where is Captain America from? ",
        answers: [
            {text: "Wales", correct: false},
            {text: "Bristol", correct: false},
            {text: "Queens", correct: false},
            {text: "Brooklyn", correct: true},
        ]
    }

]

const question = document.getElementById("question");
const answerlist = document.getElementById("answer-list");
const nextbtn = document.querySelector(".next-btn");
let currentquestionindex = 0;
let score = 0;

function startQuiz(){
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next &#8594;";
    showQuestion();
}

function showQuestion(){
    reset();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    question.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerlist.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function reset(){
    nextbtn.innerHTML = "Next &#8594;";
    while (answerlist.firstChild) {
        answerlist.removeChild(answerlist.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("wrong");
    }
    Array.from(answerlist.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

nextbtn.addEventListener("click", ()=>{
    if(currentquestionindex < questions.length){
        handleNext();
    }
    else{
        startQuiz();
    }
});

function handleNext(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestion();
    }
    else{
        endGame();
    }
}

function endGame(){
    reset();
    question.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Restart";
    nextbtn.style.display = "block";
}

startQuiz();
