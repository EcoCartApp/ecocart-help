import React, { useContext, useRef, useEffect } from 'react';
import SearchContext from '../components/searchFAQS/searchContext';
import FAQs from './FAQs';
import image from '../assets/backgroundImage.png';
import '../index.css'


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
        <div className="searchComponent" style={{ backgroundImage: "url(" + image + ")" , backgroundColor: "#EAF6FA", backgroundSize: 1500}}>           
            <form>
                <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}> 
                How can we help you? 
                </h3>
                <input type="text" placeholder="Search for your question..." style={{marginBottom: 0}}/>

            </form>
          
        </div>
        );
}


export default Search;