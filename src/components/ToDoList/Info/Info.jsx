import React, { Component } from 'react';
import InfoList from '../InfoList/InfoList';
class Info extends Component {
    state = {
        name:'list'
    } 
    render() { 
        return (
            <div>
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.list.map(item => <InfoList updateToDo={this.props.updateToDo} deleteToDo={this.props.deleteToDo} key={item.id} {...item} name={this.state.name}/>)
                    }
                </ul>
            </div>
        );
    }
}
 
export default Info;