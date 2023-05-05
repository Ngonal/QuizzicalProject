import React from "react"
import {Context} from "../Context"
import Questionnaire from "../components/Questionnaire"
import {nanoid} from "nanoid"

function QuizPage() {
    const {
        questionnaires, 
        restartQuiz, 
        finishedStatus, 
        finishQuiz,
        correctAnswers
    } = React.useContext(Context)
    
    const [questionnaireElements, setQuestionnaireElements] = React.useState(
        questionnaires.map((questionnaire, index) => 
            <Questionnaire key={nanoid()} data={questionnaire}/>
        )
    )
    
    return (
        <div className="quiz-page">
            <div className="questionnaire-section">
                {questionnaireElements}
            </div>
            <div className="quiz-page-footer">
                {
                    finishedStatus ? 
                    <div className="quiz-page-results">
                        <div className="final-score">You scored {correctAnswers}/{questionnaires.length} correct answers</div>
                        <div onClick={restartQuiz} className="button" id="play-again">Finish quiz</div> 
                    </div> :
                    <div onClick={finishQuiz} className="button" id="check-answers">Check answers</div>
                }
            </div>
        </div>
    )
}

export default QuizPage