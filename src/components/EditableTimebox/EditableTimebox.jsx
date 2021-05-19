import React from 'react';
import TimeboxEditor from '../TimeboxEditor/TimeboxEditor';
import CurrentTimebox from '../CurrentTimebox/CurrentTimebox';
import TimeboxList from '../TimeboxList/TimeboxList';

class EditableTimebox extends React.Component{
    state = {
        title: "Przenoszenie stanu",
        timeValue: 20,
        isActive : true
    }

    handleChangeTitle=(e)=>{
        this.setState({
            title: e.target.value
        })
    }

    handleChangeTimer=(e)=>{
        this.setState({
            timeValue: e.target.value
        })
    }

    handleActive=()=>{
        this.setState({isActive: false})
    }

    handleEdit=()=>{
        this.setState({isActive: true})
    }

    render(){
        return(
        <>
        <TimeboxList/>
        <TimeboxEditor 
            handleActive={this.handleActive} 
            isActive={this.state.isActive} 
            handleTimer={this.handleChangeTimer} 
            handleTitle={this.handleChangeTitle} 
            title={this.state.title} 
            timeValue={this.state.timeValue}
        />
        <CurrentTimebox 
            isActive={this.state.isActive}
            handleEdit={this.handleEdit} 
            title={this.state.title} 
            timeValue={this.state.timeValue}
        />
        </>
        )
    }
}

export default EditableTimebox;