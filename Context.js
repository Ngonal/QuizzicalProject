import React, {createContext} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [takingStatus, setTakingStatus] = React.useState(false)
    const [finishedStatus, setFinishedStatus] = React.useState(false)
    const [questionnaires, setQuestionnaires] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    const [questionsLoading, setQuestionsLoading] = React.useState(false)
    const [fetchURL, setFetchURL] = React.useState("https://opentdb.com/api.php?amount=5")
    const [fetchParameters, setFetchParameters] = React.useState({})
    const [errorLoading, setErrorLoading] = React.useState(false)
    
    function updateFetchParameters(parameterType, parameter) {
        setFetchParameters(prevFetchParameters => Object.assign({}, prevFetchParameters, {[parameterType]: parameter}))
    }
    
    function getQuestions() {
        if (!takingStatus) {
        setQuestionsLoading(true)
        fetch(fetchURL)
            .then(res => res.json())
            .then(data => setQuestionnaires(data.results))
        }
    }
    
    function startQuiz() {
        setErrorLoading(false)
        getQuestions()
    }
    
    function finishQuiz() {
        setFinishedStatus(true)
    }
    
    function restartQuiz() {
        setTakingStatus(false)
        setFinishedStatus(false)
        setCorrectAnswers(0)
        setQuestionnaires([])
    }
    
    function addPoints() {
        setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1)
    }
    
    React.useEffect(() => {
        questionnaires.length ? setTakingStatus(true) : questionsLoading && setErrorLoading(true)
        setQuestionsLoading(false)
    }, [questionnaires])
    
    React.useEffect(() => {
        let updatedFetchURL = "https://opentdb.com/api.php?amount=5"
        
        for (const property in fetchParameters) {
            fetchParameters[property] && (updatedFetchURL += "&" + property.toLowerCase() + "=" + fetchParameters[property])
        }
        setFetchURL(updatedFetchURL)
    }, [fetchParameters])
    
    return (
        <Context.Provider value={{
            getQuestions,
            questionnaires,
            questionsLoading,
            takingStatus,
            startQuiz,
            finishedStatus,
            finishQuiz,
            restartQuiz,
            correctAnswers,
            addPoints,
            updateFetchParameters,
            errorLoading
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}