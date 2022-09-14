import React,{Component} from 'react';
import css from './FirstTest.module.css';
console.log(css);

class FirstTest extends Component{
    render(){
        return(
            <div>
                <h2 className='title'>{this.props.context}</h2>
            </div>
        )
    }
}
export default FirstTest
