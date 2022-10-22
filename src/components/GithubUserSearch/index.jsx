import React,{ Component } from 'react';
import './index.css'
import HeadSearch from './HeadSearch'
import Row from './Row';
export default class Context extends Component {
    state = {
        dataList:[],
        pageState:0//0 init,1 searching 2.end
    };
    updateUserSearchState(stateObj){
        this.setState(stateObj)
    }


    render(){
        return (
            <div className="container">
                <HeadSearch updateUserSearchState={(stateObj) => this.updateUserSearchState(stateObj)}/>
                <Row {...this.state}/>
            </div>
        )
    }
}