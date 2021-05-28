import React from 'react';
import Clock from '../Clock/Clock';
import ProgressBar from '../ProgressBar/ProgressBar';
import convertSecondsToTimer from '../../lib/time'

class CurrentTimebox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        }
    }

    handleStart=()=>{
        this.setState(
            {isRunning: true,
                isPaused: false,
            }
            )
        this.startTimer()
    }

    handleStop=()=>{
        this.stopTimer()
        this.setState(
            {pausesCount: 0,
            isPaused: false,
            isRunning: false,
            elapsedTimeInSeconds: 0})
    }

    handlePause=()=>{
        this.state.isPaused? this.startTimer() : this.stopTimer();
        this.setState((prevState)=>{return{pausesCount: !prevState.isPaused ? prevState.pausesCount+1 : prevState.pausesCount, isPaused: !prevState.isPaused}})
    }

    startTimer(){
        this.timerInterval = window.setInterval(
            ()=>{
                this.setState((prevState)=>
                {return{
                    elapsedTimeInSeconds: prevState.elapsedTimeInSeconds+0.1
                    }
                }
                )
            },
            100
        )
    }

    stopTimer(){
        window.clearInterval(this.timerInterval)
    }

    render() {
        const {isRunning , isPaused , pausesCount, elapsedTimeInSeconds} = this.state
        const totalTimeInSeconds = this.props.timeValue * 60;
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
        const [hoursLeft, minutesLeft, secondsLeft, milisecondsLeft] = convertSecondsToTimer(timeLeftInSeconds)
        const progressInPrecent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
        return (
            <div className={`CurrentTimebox ${this.props.isActive? "inactive" :""}`}>
                <h1>{this.props.title}</h1>
                <Clock hours={hoursLeft} minutes={minutesLeft} seconds={secondsLeft} miliseconds={milisecondsLeft} />
                <ProgressBar progress = {progressInPrecent}/>
                <button disabled = {(isRunning && !isPaused) || this.props.isActive} onClick={this.props.handleEdit} >Edytuj</button>
                <button disabled = {isRunning || this.props.isActive} onClick={this.handleStart} >Start</button>
                <button disabled = {!isRunning || this.props.isActive} onClick={this.handleStop}>Stop</button>
                <button disabled = {!isRunning || this.props.isActive} onClick={this.handlePause}>{isPaused? `Wznow` : `Pauza`}</button>
                Liczba przerw: {pausesCount}
            </div>
        )
    }
}

export default CurrentTimebox;