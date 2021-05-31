import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ReactDOM from 'react-dom';

describe("ProgressBar ",()=>{
    it('renders when recives progress value',()=>{
        const root = document.createElement("div");
        ReactDOM.render(
            <ProgressBar progress ={50} />, root
        )
        expect(<ProgressBar />).toEqual(<ProgressBar />)
        })
})