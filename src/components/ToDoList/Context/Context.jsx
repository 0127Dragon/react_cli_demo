import React, { Component } from 'react';
import './context.css'
import TopInput from '../TopInput/TopInput'
import Info from '../Info/Info'
import InfoStatis from '../InfoStatis/InfoStatis';

class Context extends Component {
    state = {
        dataList:[
            {text:'测试数据1',id:1,done:true},
            {text:'测试数据2',id:2,done:true}
        ]
    } 
    render() { 
        return (
            <div className='context'>
                <TopInput submitData={data => { this.submitData(data)}}/>
                <Info 
                    deleteToDo={(id) => {this.deleteToDo(id)}} 
                    updateToDo={(id,isDone) => {this.updateToDo(id,isDone)}} 
                    list={this.state.dataList}
                />
                <InfoStatis list={this.state.dataList} allCheck={(flag) => this.allCheck(flag)} cleanAllDone={() => this.cleanAllDone()}/>
            </div>
        );
    }
    cleanAllDone(){
        let { dataList } = this.state;
        dataList = dataList.filter(item => !item.done);
        this.setState({
            dataList:dataList
        })
    }
    allCheck(flag){
        let { dataList } = this.state;
        dataList = dataList.map(item => {
            return {...item,done:flag}
        });
        this.setState({
            dataList:dataList
        })
    }
    submitData(data){
        let id = new Date().getTime();
        let done = false;
        this.setState({
            dataList:[
                {id,text:data,done},
                ...this.state.dataList,
            ]
        },() => {
            console.log('success');
        })
    }
    deleteToDo(id){
        const { dataList } = this.state;
        let nList = dataList.filter(item => item.id != id);
        this.setState({
            dataList:nList
        })
    }
    updateToDo(id,isDone){
        const { dataList } = this.state;
        let nList = dataList.map(item => {
            if(item.id == id){
                return {...item,done:isDone};
            }
            return item;
        });
        this.setState({
            dataList:nList
        })
    }
}
 
export default Context;