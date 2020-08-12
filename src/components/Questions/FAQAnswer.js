import React,{useContext} from 'react';

const FAQAnswer = ({ faq }) => {
    
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


export default FAQAnswer;