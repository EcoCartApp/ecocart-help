import {

    FILTER_FAQS,
    CLEAR_FILTER

} from '../types';

export default (state, action) => {
    switch(action.type){
        
        case FILTER_FAQS:
            return{
                ...state,
                filtered: state.faqs.filter(faq => {
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return faq.question.match(regex) || faq.answer.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
};