import React, {Component} from 'react';
import {FAQS,GETTINGSTARTEDFAQS,ACCOUNTFAQS,CARBONOFFSETFAQS,ECOPOINTFAQS,ABOUTECOCARTFAQS,PRIVACYFAQS } from "../../data/faqs";
import EachFAQ from "./EachFAQ";
import Faq from "react-faq-component";
import '../../index.css'

const styles = {
    // bgColor: 'white',
    //titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",

};
const config = {
    // animate: true,
    // arrowIcon: "V",
};


class DisplayFAQs extends Component{
   constructor(props){
       super(props);
       //this.state={activeCategory:this.props.activeCategory};
   }

    render(){
        
        if(this.props.activeCategory==="gettingStarted") { 
            //console.log(this.state.activeCategory);
            return(
                    
                   <div className="questions">
                       
                       <div class="shadow p-3 mb-5 bg-white rounded">
                       <div style= {{padding:50}}> 
                        <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Getting Started</h3>
                        <Faq data={GETTINGSTARTEDFAQS} styles={styles} config={config} />  
                        </div>
                        </div>               
                   </div>   
            )
        }
        else if(this.props.activeCategory==="accountQuestions"){
            //console.log(this.state.activeCategory);
            return(
                <div class="shadow p-3 mb-5 bg-white rounded">
                <div style= {{padding:50}}> 
                <div id="questions">
                    <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Account Questions</h3>
                    <Faq data={ACCOUNTFAQS} styles={styles} config={config} />                 
                </div>  
                </div>
                </div>
         )
        }
        else if(this.props.activeCategory==="carbonOffsets"){
            //console.log(this.state.activeCategory);
            return(
                <div class="shadow p-3 mb-5 bg-white rounded">
                <div style= {{padding:50}}> 
                <div id="questions">
                    <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Carbon Offsets</h3>
                    <Faq data={CARBONOFFSETFAQS} styles={styles} config={config} />                 
                </div>  
                </div>
                </div>
         )
        }
        else if(this.props.activeCategory==="ecopoints"){
            //console.log(this.state.activeCategory);
            return(
                <div class="shadow p-3 mb-5 bg-white rounded">
                <div style= {{padding:50}}> 
                <div id="questions">
                    <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Ecopoints</h3>
                    <Faq data={ECOPOINTFAQS} styles={styles} config={config} />                 
                </div>  
                </div>
                </div>
         )
        }
        else if(this.props.activeCategory==="aboutEcocart"){
            //console.log(this.state.activeCategory);
            return(
                <div class="shadow p-3 mb-5 bg-white rounded">
                <div style= {{padding:50}}> 
                <div id="questions">
                    <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>About Ecocart</h3>
                    <Faq data={ABOUTECOCARTFAQS} styles={styles} config={config} />                 
                </div> 
                </div>
                </div> 
         )
        }
        else if(this.props.activeCategory==="privacy"){
            //console.log(this.state.activeCategory);
            return(
                <div class="shadow p-3 mb-5 bg-white rounded">
                <div style= {{padding:50}}> 
                <div id="questions">
                    <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Privacy</h3>
                    <Faq data={PRIVACYFAQS} styles={styles} config={config} />                 
                </div>  
                </div>
                </div>
         )
        }
        else{
            return(
                <div>
                    <h1>Please select a category</h1>                    
                </div>   
         )

        }
    }
}

export default DisplayFAQs;