import React from 'react';

function TimeboxEditor({title,timeValue,handleTitle,handleTimer,isActive,handleActive}){
    return(
        <div className={`TimeboxEditor ${isActive? "" :"inactive"}`}>
        <label>Co robisz? <input disabled={!isActive} onChange={handleTitle} defaultValue={title} type="text"/></label>
        <br/>
        <label>Ile minut? <input disabled={!isActive} onChange={handleTimer} defaultValue={timeValue} type="number"/></label>
        <br/>
        <button onClick={handleActive} disabled={!isActive}>Zatwierdz zmiany</button>
        </div>
    )
}

export default TimeboxEditor