import React from 'react';
import TimeboxCreator from '../TimeboxCreator/TimeboxCreator';
import Timebox from '../Timebox/Timebox';

class TimeboxList extends React.Component{
    state = {
        timeboxes:[
            { id: 11, title: "test timebox" , timeValue: 666},

        ],
        timeboxEdit:{},
        isEditing: false
    }

    handleRemove(removeIndex){
        this.setState((prevState)=> 
        {return{
            timeboxes: prevState.timeboxes.filter((e,index)=> removeIndex !== index)
        }
        })
    }

    // handleUpdate(i){
    // const newState = {...this.state.timeboxes[i]};
    // newState.title = "COMPLETED";
    //     this.setState((prevState)=>{
    //         const timeboxes= prevState.timeboxes.map((element,index)=> i === index ? newState : element)
    //         return {timeboxes}
    //     });
    // }

    handleUpdate(timebox){
        this.setState({
            timeboxEdit: timebox,
            isEditing: true
        })
    }

    handleAdd=({title,timeValue=0,id})=>{
        const timebox = {id: id, title:title, timeValue:timeValue};
                this.setState((prevState)=>{
                    const timeboxes=[timebox ,...prevState.timeboxes];
                    return {timeboxes}
                });
    }

    // {
    //     timeboxes:[
    //         editedTimebox,
    //         ...timeboxes
    //     ],
    //     isEditing: false}

    // this.setState((prevState)=>{
    //     const timeboxes=[editedTimebox, ...prevState.timeboxes.filter((id)=> id!==editedTimebox.id)];
    //     return {timeboxes, isEditing: false}
    // })
    
    handleEditing=({title,timeValue=0,id})=>{
        const editedTimebox = {id: id, title:title, timeValue:timeValue};
        const timeboxes = this.state.timeboxes.map((timebox)=>{
            if(timebox.id === editedTimebox.id){
                return({
                    id: editedTimebox.id,
                    title: editedTimebox.title,
                    timeValue: editedTimebox.timeValue
                })
            }
            return timebox
        }
        )
        this.setState({
            timeboxes: timeboxes,
            isEditing : false
        })
    }

    render(){
        return(
            <div>
                <TimeboxCreator 
                handleAdd={this.handleAdd} 
                timeboxEdit={this.state.timeboxEdit} 
                isEditing={this.state.isEditing}
                handleEditing={this.handleEditing}
                />

                {this.state.timeboxes.map((timebox,index)=>
                <Timebox
                isEditing={this.state.isEditing}
                title={timebox.title} 
                timeValue={timebox.timeValue} 
                key={timebox.id}
                handleRemove={()=>this.handleRemove(index)}
                handleUpdate={()=>this.handleUpdate(timebox)}
                />
                )}
            </div>
        )
    }
}

export default TimeboxList;
