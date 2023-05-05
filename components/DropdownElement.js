import React from "react"
import {nanoid} from "nanoid"

import {Context} from "../Context"

function Dropdown({
        selectionType, 
        selections, 
        divClassName, 
        dropdownClassName, 
        dropdownSelectionClassName,
        dropdownContentClassName, 
        selectionClassName,
        inputTypeClassName
    }) {
    
    const {updateFetchParameters, questionsLoading} = React.useContext(Context)
    
    const [currentSelection, setCurrentSelection] = React.useState(selections[
            Math.round((selections.length - 1) * Math.random())
        ]
    )
    
    const [isToggled, setIsToggled] = React.useState(false)
    
    const dropdownElement = 
        <div className={divClassName}>
            <div className={inputTypeClassName}>{selectionType}</div>
            <div 
                onClick={() => !questionsLoading && setIsToggled(!isToggled)}
                onMouseLeave={() => setIsToggled(false)}
                className={isToggled ? dropdownClassName + " is-toggled" : dropdownClassName}
            >
                <div className={dropdownSelectionClassName}>{currentSelection.Selection}</div>
                <div className={dropdownContentClassName}>
                    {selections.map(selectionInfo => 
                        <div onClick={() => selectionInfo.Selection !== currentSelection.Selection && setCurrentSelection(selectionInfo)} key={nanoid()} className={selectionClassName}>{selectionInfo.Selection}</div>
                        )
                    }
                </div>
            </div>
        </div>
    
    React.useEffect(() => {
        updateFetchParameters(selectionType, currentSelection.Parameter)
    }, [currentSelection])
    
    return (
        <div>
            {dropdownElement}
        </div>
    )
}

export default Dropdown