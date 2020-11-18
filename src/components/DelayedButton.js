// Code DelayedButton Component Here

import React,{Component} from 'react'


export default class DelayedButton extends Component{
    
    handleClick = (e) => {
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }
    
    render(){
        return(
            <button type='button' 
            onClick={() => this.handleClick(e.persist())}>
                Delay
            </button>
        )
    }
}