// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (e) => {
      this.props.onDelayedClick(e)

    }
    
    render(){
        // let callback = () => this.props.onReceiveCoordinates
        // console.log(callback)
        return(
            <button
            onClick={this.handelClick}
            >
                Delay
            </button>
        )
    }
}