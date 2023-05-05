import React from "react"
import {Context} from "../Context"
import regEx from "../utils/regEx"
import shuffleArray from "../utils/shuffleArray"
import {nanoid} from "nanoid"

function Questionnaire({data}) {
    const {finishedStatus, addPoints} = React.useContext(Context)
    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    const [answers, setAnswwer] = React.useState(
        shuffleArray(data.incorrect_answers.concat([data.correct_answer]))
    )
    const [isCorrectAnswer, setIsCorrectAnswer] = React.useState(false)
    
    const answerElements = answers.map((answer, index) => 
        <div key={nanoid()}
            onClick={!finishedStatus ? (() => setSelectedAnswer(answer)) : undefined} 
            className={
                finishedStatus ? (data.correct_answer === answer ? "answer final correct" :             (selectedAnswer === answer ? "answer opaque incorrect" : "answer opaque")
                ) : 
                (selectedAnswer === answer ? "answer selected" : "answer")
            }
        >
            {regEx(answer)}
        </div>
    )
    
    React.useEffect(() => {
        
        if (finishedStatus) {
            selectedAnswer === data.correct_answer && addPoints()
        }
    }, [finishedStatus])
    
    React.useEffect(() => {
        selectedAnswer === data.correct_answer ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)
    }, [selectedAnswer])
    
    return (
        <div>
            <div className="questionnaire flex">
                <div className="column">
                    <div className="question">{regEx(data.question)}</div>
                    <div className="answers">
                        {answerElements}
                    </div>
                </div>
                <hr/>
                <img className="checkbox" src={
                    finishedStatus ? 
                        (isCorrectAnswer ? 
                        "../images/checkmarkCheckbox.png" : 
                        "../images/crossCheckbox.png") :
                    "../images/emptyCheckbox.png"
                }/>
            </div>
            <hr className="line-break opaque"/>
        </div>
    )
}

export default Questionnaire