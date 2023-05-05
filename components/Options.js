import React from "react"
import {nanoid} from "nanoid"
import DropdownElement from "./DropdownElement"

/* https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple */

import allOptionsSource from "../allOptionsSource"

function Options() {
    
    const [reference, setReference] = React.useState(allOptionsSource)
    
    const [dropdownElements, setDropdownElements] = React.useState(reference.map(selectionInfo =>
            <DropdownElement 
                key={nanoid()} 
                selectionType={selectionInfo.SelectionType} 
                selections={selectionInfo.Selections}
                divClassName="option-box"
                dropdownClassName="dropdown"
                dropdownSelectionClassName="option-input"
                dropdownContentClassName="dropdown-content"
                selectionClassName="option"
                inputTypeClassName="option-type"
            />
        )
    )
    
    return (
        <div className="options">
            {dropdownElements}
        </div>
    )
}

export default Options