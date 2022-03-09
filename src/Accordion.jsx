import React from 'react';
class Accordion extends React.Component{
  state={
value: false,
ariaValue: false
};     
  shoHide(){
    this.setState(
        {value : true,
            ariaValue : true
        }
    );    
}

render(){
    return(
        <div>
          
            <h2>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={this.state.ariaValue } aria-disabled={this.state.ariaValue} aria-controls="collapseOne" onClick={()=>this.shoHide()}>
        Accordion Item #1 
     </button>
 {this.state.value === false ? null:<div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
}       

    
  </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    </div>
        </div>
    )
}
}
export default Accordion;