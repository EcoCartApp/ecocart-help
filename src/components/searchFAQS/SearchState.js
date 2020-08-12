import React, {useReducer} from 'react';
import SearchContext from './searchContext';
import searchReducer from './searchReducer';
import {    
    FILTER_FAQS,
    CLEAR_FILTER
} from '../types';

const SearchState= props => {
    const initialState =  {
        faqs: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(searchReducer, initialState);  
    
    //Filter Contacts
    const filterFAQs = () => {        
        dispatch({ type: FILTER_FAQS, payload: "text" });
    };

    //Clear Filter
    const clearFilter = () => {        
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <SearchContext.Provider
         value={{
             faqs: state.faqs,
             current: state.current,
             filtered: state.filtered,
             error: state.error,
             
             filterFAQs,
             clearFilter
         }}>
        </SearchContext.Provider>
    )
};

export default SearchState;