import React, { Component } from 'react';
import './InfoStatis.css'
class InfoStatis extends Component {
    state = {  } 
    render() { 
        const {list} = this.props;
        const doneCount = list.filter(item => item.done).length;
        return (
            <div>
                
                <p style={{textAlign:'left'}}>
                <input type="checkbox" checked={doneCount === list.length} onChange={(event) => this.props.allCheck(event.target.checked)}/>
                已完成 { doneCount } / 全部 {list.length} 
                <button className='infoStatisBtn' onClick={() => this.props.cleanAllDone()}>清除已完成</button>
                </p>
            </div>
        );
    }
}
 
export default InfoStatis;