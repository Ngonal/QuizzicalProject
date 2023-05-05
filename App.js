import React from "react"

import StartPage from "./pages/StartPage"
import QuizPage from "./pages/QuizPage"

import {Context} from "./Context"

function App() {
    const {takingStatus, questionsLoading} = React.useContext(Context)
    
    return (
        <div className="app">
            <header></header>
            {!questionsLoading && takingStatus ? <QuizPage /> : <StartPage />}
            <footer id="dev-credit">
                <h2 id="developed-by">Developed by: </h2>
                <div id="dev-name">
                    <h2 id="ngonal">Ngonal</h2>
                </div>
                
                <div className="dev-logo">
                    <img src="./images/credits/github.png" id="github"/>
                </div>
                <a href="https://github.com/Ngonal/QuizzicalProject">
                <div className="dev-logo">
                    <img src="./images/credits/linkedin.png" id="linkedin"/>
                </div>
                </a>
            </footer>
        </div>
    )
}

export default App
