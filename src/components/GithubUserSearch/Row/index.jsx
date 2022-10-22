import React, { Component } from 'react';
export default class Row extends Component {
    render(){
        let styleObj = {width:'100px'};
        if(this.props.pageState === 0){
            return (<p>请输入要查询的内容并点击Search按钮</p>)
        }
        if(this.props.pageState === 1){
            return (<p>查询中...</p>)
        }
        return (
            <div className="row">
                {this.props.dataList.map(item => {
                    return (
                        <div key={item.id} className="card">
                            <a href={item.html_url} target="_blank">
                            <img alt='user' src={item.avatar_url} style={styleObj}/>
                            </a>
                            <p className="card-text">{item.login}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}