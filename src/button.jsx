import React from 'react';
class Counter extends React.Component{
    render(){
        return(
<div>
<Button aria-pressd="false"> </Button>
			</div>
        );
    }
}
class Button extends React.Component{
    state ={
textflag: false
    }
    ToggleButton(){
        this.setState(
            {textflag : !this.state.textflag}
        );
    }
    render(){
        return(
            <div>
<button onClick={() => this.ToggleButton()}>
{ this.state.textflag === false ? "Mute":"Unmute" }
				</button>
{!this.state.textflag && this.props.text}
			</div>
        )
    }
}
export default Counter;