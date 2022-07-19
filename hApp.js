const quizData = [
    {
        question: "The Battle of Plassey was fought in",
        a: "1757",
        b: "1782",
        c: "1748",
        d: "1764",
        correct: "a",
    },
    {
        question: "Under Akbar, the Mir Bakshi was required to look after",
        a: "military affairs",
        b: "the state treasury",
        c: "the royal household",
        d: "the land revenue system",
        correct: "a",
    },
    {
        question: "Under an agreement with which of the following countries did Subhas Chandra Bose organize the Indian soldiers, taken as prisoners by the Axis Powers, into the Azad Hind Fauj?",
        a: "China",
        b: "Germany",
        c: "Italy",
        d: "Japan",
        correct: "d",
    },
    {
        question: "The United States bought Alaska from which country?",
        a: "Mexico",
        b: "Russia",
        c: "Japan",
        d: "Canada",
        correct: "b",
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
