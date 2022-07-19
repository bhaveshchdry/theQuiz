const quizData = [
    {
        question: "The members of the panchayat are",
        a: "nominated by the district officer",
        b: "the electorates of the respective territorial constituencies",
        c: "nominated by local self-government minister of the state",
        d: "nominated by the block development organization",
        correct: "b",
    },
    {
        question: "The members of the Rajya Sabha are elected for a term",
        a: "of six years",
        b: "determined by the state legislative assembly of a state",
        c: "of four years",
        d: "	None of the above",
        correct: "a",
    },
    {
        question: "Which state has the largest number of seats reserved for schedule tribes in Lok Sabha",
        a: "Bihar",
        b: "Assam",
        c: "Madhya Pradesh",
        d: "Chhattisgrah",
        correct: "c",
    },
    {
        question: "Who is the first President of Indian National Congress",
        a: "Dadabhai Naoroji",
        b: "M K Gandhi",
        c: "George Yule",
        d: "W C Bonnerjee",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
