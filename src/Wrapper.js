import React from 'react';
import Header from './component/Header.js';
import Sidebar from './component/Sidebar.js';
import Content from './component/Content.js';
import './styles.css';

class Wrapper extends React.Component{

    constructor(props){
        super(props)
        this.state={
            step: 0
        }
        this.switchCaseContent=this.switchCaseContent.bind(this);
        this.switchCaseHeader=this.switchCaseHeader.bind(this);
        this.edit=this.edit.bind(this);
    }
    
    switchCaseHeader=()=>{
        for(var k=0;k<28;k++){
            switch(this.state.step){
                case k:
                    return(
                        <Header pindah={k} />
                    );
            }
        }
    }

    switchCaseContent=()=>{
        for(var i=0;i<28;i++){
            switch(this.state.step){
                case i:
                    return(
                        <Content pindah={i} />
                    );
            }
        }
    }

    edit(e){
        this.setState({
            step: e
        })
    }

    render(){
        return(
            <div>
                <div className="header">
                    {this.switchCaseHeader()}
                </div>
                <div className="main">
                    <div className="sidebar">
                        <Sidebar edit={this.edit} />
                    </div>
                    <div className="content">
                        
                        {this.switchCaseContent()}
                        

                        {/* <iframe src={this.Header} name="tengah">
                            <p>IFRAME KEBACA</p>
                        </iframe> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;