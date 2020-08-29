import React, { useContext, useRef, useEffect } from 'react';
import SearchContext from '../components/searchFAQS/searchContext';
import FAQs from './FAQs';
//import image from '../assets/backgroundImage.png';
import image from '../assets/bannerpic.png';
import '../index.css'
import Container  from 'react-bootstrap/Container'

const Search = () => {
   /* const searchContext= useContext(SearchContext);
    const text = useRef('');

    const { filterFAQs, clearFilter, filtered} =searchContext;

    useEffect(() => {
        if(filtered === null){
            text.current.value= '';
        }
    });
       
    const onChange = e => {
        if(text.current.value!== ''){
            filterFAQs(e.target.value);
        }else{
            clearFilter();
        }
    }style="background-image: url('img_girl.jpg');"
  */
    return ( 
        <div style={{backgroundColor: "#EAF6FA"}}>
        <Container fluid="md">
        <div className="searchComponent" style={{ backgroundImage: "url(" + image + ")" , backgroundColor: "#EAF6FA", backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"right",paddingRight:30}}>           
        
            <form>
                <h1 style={{color:"#0D3C2A", fontFamily: "Montserrat", fontSize: "32px",fontWeight: "bold"}}> 
                How can we help? 
                </h1>
                <input type="text"  placeholder="Search for your question..." style={{marginBottom: 0, borderColor: "#FFFFFF", width: "350px",height:"50px",fontSize:"20px"}} />

            </form>
            
        </div>
        </Container>
        </div>
        );
}


export default Search;