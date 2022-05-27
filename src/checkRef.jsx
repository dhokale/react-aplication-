import React from 'react';
class CheckRef extends React.Component{
  state={
value: true,
ariaValue: false
};
first=React.createRef();     
  shoHide(){
    this.setState(
        {value : false ,
            ariaValue : true 
        }
    );
    
}
shoHide1(){
    this.setState(
        {value : true ,
            ariaValue : false 
        }
    );
    
}
componentDidUpdate(){
    this.first.current.focus();         
}
render(){
    return(
        <div>
          
            
            <button class="accordion-button" type="button"   onClick={()=>this.shoHide()}>
        first input feald  
     </button>
<button class="Accordion-button" type="button"   onClick={()=>this.shoHide1()}>
        next  input feald  
     </button>
 {this.state.value === true ? <label>
    firstName:
    <input id="firstname" name="firstname"type="text" aria-required="true"ref={this.first}/><br/>
    </label> :null }
{this.state.ariaValue === true ? <label>
    firstName:
    <input id="firstName" name="firstname"type="text" ref={this.first}/><br/>
    </label> : null 
}                
        </div>
    )
}
}
export default CheckRef;