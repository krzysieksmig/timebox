import React from 'react';

function Timebox({title,timeValue,handleRemove,handleUpdate,isEditing}){
    if(timeValue <=0){
        throw new Error("Czas nie moze byc mniejszy ani rowny zero")
    }
    return(
        <div className={!isEditing? "Timebox" : "Timebox inactive"}>
            <h3>{title} - {timeValue} min</h3>
            <button onClick={handleRemove} disabled ={isEditing}>usuń</button>
            <button onClick={handleUpdate} disabled ={isEditing}>edytuj</button>
        </div>
    )

}

export default Timebox;