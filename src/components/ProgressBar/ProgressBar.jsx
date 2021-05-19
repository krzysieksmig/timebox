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

export default ProgressBar