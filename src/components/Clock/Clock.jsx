import React from 'react';

function Clock({hours = 0, minutes = 1, seconds = 50, miliseconds = 23,}){
    const hour = hours
    const minute = ((minutes >59 ? minutes = 0 : (minutes <0 ? minutes = 0+"0" : (minutes < 10 ? "0" + minutes : minutes))));
    const second = ((seconds >59 ? seconds = 59 : (seconds <0 ? seconds = 0+"0" : (seconds < 10 ? "0" + seconds : seconds))));
    const milisecond =((miliseconds > 999 ? miliseconds = 999 : (miliseconds <0 ? miliseconds = 0+"00" : (miliseconds < 10 ?  miliseconds : (miliseconds < 100 ? "0" + miliseconds : miliseconds)))));
    const timer = (`${hour}:${minute}:${second}.${milisecond}`).toString();
    return (<h2 className="Clock"> Pozostało {timer}</h2>)
}

export default Clock;