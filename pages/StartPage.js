import React from "react"
import {Context} from "../Context"
import Options from "../components/Options"

function StartPage() {
    const {
        startQuiz, 
        questionsLoading,
        getQuestions,
        errorLoading
    } = React.useContext(Context)
    
    return (
        <div className="start-page">
            <div className="title">Quizzical</div>
            <div className="description">Just how knowledgable are you?</div>
            {<Options className="options"/>}
            <div 
                onClick={startQuiz} 
                className="button" id="start-quiz">{questionsLoading ? "Loading questions..." : "Start quiz"}
            </div>
            <div className="error-output">
            {errorLoading && <h3 className="error-message">Fetch error: try using different parameters</h3>}
            </div>
        </div>
    )
}

export default StartPage