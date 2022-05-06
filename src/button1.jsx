import React from 'react';
import ReactDOM from 'react-dom'; 
class Button1 extends React.Component{
edit=(event)=>{
 
 ReactDOM.render( <label>firstName:<input id="firstname" name="firstname"type="text" aria-required="true"ref={this.first}/></label>,event.target.parentNode.parentNode.children[0]).focus();              
 
 ReactDOM.render( <button onClick={this.save}>save</button>,event.target.parentNode.parentNode.children[7])      
}
save=(event)=>{
ReactDOM.render(this.first.current.value,event.target.parentNode.parentNode.children[0])
ReactDOM.render( <Button1/>,event.target.parentNode.parentNode.children[7])
}  
    render(){
        return(

            <button type='button' ref={this.callRef} onClick={this.edit}> edit  </button>
       
 )
    }
}
export default Button1;    