import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../components/searchFAQS/searchContext';

const FAQItem = ({ faq }) => {
    
    const searchContext= useContext(SearchContext);
    
    const {question, answer} =faq;

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {question}
            </h3>
            <p>
                { answer }                
            </p>
        </div>
    );


};


export default FAQItem;