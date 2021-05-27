import React from 'react';


function ProgressBar({progress = 15 , trackRemaining = false}){
    return(
        trackRemaining ? 
        <div className="ProgressBar">
            <div style={{width: `${100 - progress}%`}}></div>
        </div> :
        <div className="ProgressBar" style={{transform: "rotate(0deg)"}}>
            <div style={{width: `${progress}%`}}></div>
        </div>
    )
}

function numberBetween(props, propName, componentName){
    if (props[propName] < 0 || props[propName] > 100){
        return new Error(`Invalid prop ${propName} in component ${componentName}. Value must be beetwen 0-100`)
    }
}

ProgressBar.propTypes = {
    progress: numberBetween
}

export default ProgressBar