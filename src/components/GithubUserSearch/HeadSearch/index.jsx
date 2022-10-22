import axios from 'axios';
import React, { Component } from 'react';
import { createRef } from 'react';
export default class HeadSearch extends Component {
    inputDOM = createRef();
    searchUser(){
        let {value} = this.inputDOM.current;
        this.props.updateUserSearchState({
            pageState:1
        })
        axios({
            method:'get',
            url:`https://api.github.com/search/users?q=${value}`
        }).then(response => response.data,error => {
            alert('网络请求失败！f12查看错误信息');
            console.log(error);
            this.props.updateUserSearchState({
                dataList:[],
                pageState:2
            })
        }).then(res => {
            this.props.updateUserSearchState({
                dataList:res.items,
                pageState:2
            })
        })
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.inputDOM} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={() => this.searchUser()}>Search</button>
                </div>
            </section>
        )

    }
}