import React, { Component } from "react";
import Faq from "react-faq-component";
import "../index.css";
 
const data = {
    //title: "FAQ (How it works)",
    rows: [
        {
            title: "How to use the EcoCart browser extension",
            content: "EcoCart is a free browser extension that offsets the environmental impact of your online orders so you can shop sustainably. We partner with thousands of stores that you love to offer free carbon neutral shipping. All you have to do is download the EcoCart extension for Chrome, create an account, and start shopping.  While you’re searching on Google, look for “Shop Sustainably” next to participating stores..[1]...or just let EcoCart notify you when a website you’re visiting supports carbon neutral shopping. Click the big green “make my order carbon neutral” button and your order will have a net-zero impact on the planet! It’s that easy.[2]Enjoy all the stores you love, rest assured that your online orders are not leaving a carbon footprint. You’ll earn EcoPoints that can go toward eco-rewards and gift cards."
        },
        {
            title: "How can I find stores to shop sustainably?",
            content:
            "EcoCart offers a few ways to find stores that support sustainable shopping. With the extension installed, you can:\n 1. Just shop like normal and EcoCart will notify you when you’re in a store that supports carbon neutral shopping. \n2. When you search for stores on Google, participating stores will say “Shop Sustainably” next to the website name.\n [1] \n 3. Or you can browse participating stores in the extension by clicking on the EcoCart plane icon on Chrome. You’ll see stores that are offering the most EcoPoints on the home tab and stores that are trending with other EcoCart users on the search tab. Or you can search for stores by name on the search tab. \n[4] \n 4. You don’t have any stores I shop at. \n We’re constantly adding new stores that support sustainable shopping. If you’re looking for a particular store, let us know and we’ll get them on board! Just click the contact us button in the bottom right of the screen, or write to us at hello@ecocart.io.",
        },
        {
            title: "What on Earth is a carbon offset?",
            content: "v1.0.0",
        },
        {
            title: "What do you mean “carbon neutral?”",
            content: "v1.0.0",
        },
        {
            title: "How do you determine the shipping emissions of each order?",
            content: "v1.0.0",
        },
        {
            title: "What do you do with my data?",
            content: "v1.0.0",
        },
        {
            title: "What are EcoPoints? ",
            content: "v1.0.0",
        },
        {
            title: "How do I know my donations are going to the right place? ",
            content: "v1.0.0",
        },
    ],
};
 
const styles = {
    // bgColor: 'white',
    titleTextColor: "green",
   
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    //hover: "green"
   
};
 
const config = {
    //animate: true,
  //arrowIcon: "V",
  
};
 
class frequentQA extends Component {
    render() {
        return (
            <div style={{padding:5, paddingTop: 20,paddingRight:20}}>
                <h3 style={{color:"#0D3C2A", fontFamily: "Montserrat"}}>Frequently asked questions: </h3>
                <Faq data={data} styles={styles} config={config} />
            </div>
        );
    }
}

export default frequentQA;