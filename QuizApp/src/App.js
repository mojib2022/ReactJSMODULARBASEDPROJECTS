import { quizData } from './data/data';
import { useEffect, useRef, useState } from 'react'
import './css/styles.css';


function App() {
    let quizEl = useRef('');
 let [quizNumber,setquizNumber] = useState(0)
 let [question,setquestion] = useState('')
 let [atext,setatext] = useState('')
 let [btext,setbtext] = useState('')
 let [ctext,setctext] = useState('')
 let [dtext,setdtext] = useState('')
 let [score,setscore] = useState(0)
 const quiz = document.getElementById('quiz')
 const answerEls = document.querySelectorAll('.answer')
 let answer

 //UseEffect is called when the quizNumber variable change
 useEffect(()=>{
        setquestion(quizData[quizNumber].question)
        setatext(quizData[quizNumber].a)
        setbtext(quizData[quizNumber].b)
        setctext(quizData[quizNumber].c)
        setdtext(quizData[quizNumber].d)
        getScore(answer,quizData[quizNumber].correct)
 },[quizNumber])
 //End of useEffect
 
 const handleSubmit = ()=> {
    
    if(quizNumber < quizData.length-1)
    {
        answer = getSelected()
        
        getScore(answer,quizData[quizNumber].correct)
        deselectAnswer()
        setquizNumber(++quizNumber)
        
    }
    else{
        getScore(answer,quizData[quizNumber].correct)
        
        quiz.innerHTML = `
        <h2> You Answered  ${score}/${quizData.length}
        questions correctly.
        <button onclick="location.reload()">Reload</button>
        `
    }

    
 }
//loadQuiz()

//Deselect the Quiz
function deselectAnswer(){
    answerEls.forEach(answerEl=>answerEl.checked = false)
}
//End of Deselect the Quiz


//getScore
const getScore = (answer,correct)=>{
    if(answer === correct)
    {
        setscore(++score)
    }
}
//End of getScore



// Get the Selected Answer
function getSelected(){
    let answer
    
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
//End of the Selected Quiz
  return (
    <div className="App">
      <div className="quiz-container" id="quiz">
    <div className="quiz-header">
        <h2 id="question">{question}</h2>
        <ul>
            <li>
                <input type="radio" name="answer" id="a" className="answer" ref={quizEl}/>
                <label id="a_text">{atext}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="b" className="answer"/>
                <label id="b_text">{btext}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="c" className="answer"/>
                <label id="c_text">{ctext}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="d" className="answer"/>
                <label id="d_text">{dtext}</label>
            </li>
        </ul>
    </div>
    <button id="submit" onClick={handleSubmit}>Submit</button>
</div>
    </div>
  );
}

export default App;
