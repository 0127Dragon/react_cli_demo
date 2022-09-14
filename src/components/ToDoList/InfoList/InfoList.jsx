import React, { Component } from 'react';
import './infoList.css'
class InfoList extends Component {
    state = { isFocus:false }; 
    render() { 
        let { done } = this.props;
        const styleObj = {float:'right',height:'30px',marginTop:'3px',display: this.state.isFocus ? 'block' : 'none'};
        const liClassName = this.state.isFocus ? 'toDoListItem li_selected' : 'toDoListItem';


        return (
            <li className={liClassName} 
            onMouseEnter={() => this.handleMouse(true)} 
            onMouseLeave={() => this.handleMouse(false)}>
                <input type="checkbox" name={this.props.checkboxName} checked={done} onChange={(event) => {this.updateToDo(event)}}/>
                {this.props.text}
                <button style={styleObj} onClick={() => {this.deleleConfirm()}}>删除</button>
            </li>
        );
    }
    updateToDo(event){
        this.props.updateToDo(this.props.id,event.target.checked);
    }
    deleleConfirm(){
        let isDelele = window.confirm('确定要删除该条任务吗？');
        if(isDelele){
            this.props.deleteToDo(this.props.id);
        }
    }
    handleMouse(isFocus){
        this.setState({isFocus})
    }
}
 
export default InfoList;