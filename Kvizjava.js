quizData = [
    {
      question: "Koji se jezik izvrsava u pregledacu?",
      a:"Java",
      b:"C",
      c:"Python",
      d:"JavaScript",
      correct:"d"
    },
    {
        question:"Od cega je CSS skraceno",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Coloring Style Sheets",
        correct:"b",
    },
    {
        question:"Od cega je HTML skraceno",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Languge",
        d:"Helicopter Terminals Motorboats Lambhorginis",
        correct:"a",
    },
    {
        question:"Kada je nastao JavaScript",
        a:"1996",
        b:"1994",
        c:"1995",
        d:"nista od navedenog",
        correct:"b"
    }
]

quiz = document.getElementById('quiz')
answerEls = document.querySelectorAll('input')
questionEl=document.getElementById('question')
aText=document.getElementById('aText')
bText=document.getElementById('bText')
cText=document.getElementById('cText')
dText=document.getElementById('dText')
submitBtn=document.getElementById('submit')

currentQuestion = 0
score=0

loadQuiz()

function loadQuiz(){
    currentQuizData = quizData[currentQuestion]

    questionEl.innerText=currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEl.forEach(answerEl => answerEl.checked=false)
}


function getSelectedAnswer(){
    answer=undefined
    answerEl.array.forEach(answerEl => {
    if(answerEl.checked){
        answer = answerEl.id 
    }
 });
 return answer
}

submitBtn.addEventListener('click',()=>{
    answer= getSelectedAnswer()
    if(answer != undefined){
        if(answer == quizData[currentQuestion].correct){
            score ++ 
        }
        currentQuestion++
        if(currentQuestion < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=
            `
            <h2>Odgovorili ste ${score}/${quizData.length} pitanja tacno</h2>
            ,button onclick="location.reload()">Probaj ponovo</button>
            `
        }
    }else{
        alert('Niste oznacili ni jedan odgovor!')
    }



})
