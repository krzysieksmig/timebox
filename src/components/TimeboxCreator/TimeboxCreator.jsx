import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class TimeboxCreator extends React.Component{
    constructor(props){
        super(props)
        this.formRef = React.createRef()
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleAdd({
            id: uuidv4() ,
            title: this.formRef.current[0].value,
            timeValue: this.formRef.current[1].value
        })
        this.formRef.current[0].value="";
        this.formRef.current[1].value=null
    }

    handleSubmitEdit=(e)=>{
        e.preventDefault();
        this.props.handleEditing({
            id: this.props.timeboxEdit.id,
            title: this.formRef.current[0].value,
            timeValue: this.formRef.current[1].value
        })
        this.formRef.current[0].value="";
        this.formRef.current[1].value=null
    }

    render(){
        return(
            <>
            {this.props.isEditing?
                //czemu dziala po opakowaniu w <> a bez nie ?
                <>
                <form onSubmit={this.handleSubmitEdit} ref={this.formRef} className="TimeboxEditor">
                    <label>Edytuj zadanie <input id="title" type="text" defaultValue={this.props.timeboxEdit.title}/></label>
                    <br/>
                    <label>Edytuj czas <input type="number" min="0" defaultValue={this.props.timeboxEdit.timeValue}/></label>
                    <br/>
                    <button>Zakoncz Edycję Timeboxa</button>
                </form>
                </>
                :
                <form onSubmit={this.handleSubmit} ref={this.formRef} className="TimeboxEditor">
                    <label>Co robisz? <input id="title" type="text" defaultValue=""/></label>
                    <br/>
                    <label>Ile minut? <input type="number" min="0" defaultValue={null}/></label>
                    <br/>
                    <button>Dodaj Timebox</button>
                </form>
            }
            </>
        )

    }   
}


// render(){
//     return(
//         <form onSubmit={this.props.isEditing? this.props.handleEditing : this.handleSubmit} ref={this.formRef} className="TimeboxEditor">
//             <label>Co robisz? <input id="title" type="text" defaultValue={this.props.isEditing? this.props.timeboxEdit.title : "pusto"}/></label>
//             <br/>
//             <label>Ile minut? <input type="number" defaultValue={this.props.isEditing? this.props.timeboxEdit.timeValue : 0}/></label>
//             <br/>
//             <button>{this.props.isEditing? "Zakoncz Edycję Timeboxa": "Dodaj Timebox" }</button>
//         </form>
//     )
// }   
// }

export default TimeboxCreator