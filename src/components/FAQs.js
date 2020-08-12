import React, {Fragment, useContext, useEffect } from 'react';

import FAQItem from './FAQItem';
import SearchContext from '../components/searchFAQS/searchContext';
import Spinner from '../components/layout/Spinner';

const FAQs = () => {
    const searchContext= useContext(SearchContext);

    const {faqs, filtered, loading} = searchContext;
    
    
    return (
        <div>
            
            {filtered !== null && filtered !== undefined && !loading
            ?   
            //console.log(filtered)             
            filtered.map(faq => (
                
                <FAQItem faq={faq} />
               
                ))
            :
            <Spinner/>}
               

        </div>
    )

};

export default FAQs;