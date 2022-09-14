import React, { Component } from 'react';
let inputStyle = {
    width:'90%',
    height:'30px',
    paddingLeft:'10px'
};
class TopInput extends Component {
    inputDOM = React.createRef();
    render() {
        return (
            <input ref={this.inputDOM} type="text" placeholder='请输入要添加的内容' 
            style={inputStyle} 
            onKeyUp={(event) => this.keyUp(event)}/>
        );
    }
    keyUp(event){
        if(event.which === 13){
            this.props.submitData(this.inputDOM.current.value);
            this.inputDOM.current.value = ''; 
        }
    }
}
 
export default TopInput;