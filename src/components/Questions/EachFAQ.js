import React, {Component} from 'react';



class EachFAQ extends Component{

   
    render(){
        const {question,answer}= this.props.faq;
    
    return(
        <div style = {{margin:10}}>
            <ul>
              {question}            
            </ul>

        </div>
    )
    }
}

export default EachFAQ;