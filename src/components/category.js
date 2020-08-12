import React, {Component} from 'react';
import CATEGORIES from "../data/categories";
import { useHistory } from "react-router-dom";
import history from './../history';
import '../index.css';

class EachCategory extends Component{
    
    render(){
        const {image, name}= this.props.category;
        
    return(
        <div className="categoryBoxes" style = {{ display: 'inline-block', marginBottom:20, marginLeft:20}}>
            <img className="imagedropshadow" src={image} onClick={() => history.push(`/category/${name}`)} alt='category' style={{width: 330, height: 330,cursor: 'pointer', }}/>

        </div>
    )
    }
}

class Category extends Component{
    render(){
       
            return(
                <div>
                   <h3 style={{marginLeft: 124, marginBottom: 0, color:"#0D3C2A", fontFamily: "Montserrat"}}>Choose a category:</h3>
                   <div style={{margin: 10, textAlign: 'center'}}>
                       {
                           CATEGORIES.map(CATEGORY => {
                               return (
                                    <EachCategory key={CATEGORY.id} category={CATEGORY}/>
                               );
                           })
                       }
                   </div>

                </div>    
            )
        }
}

export default Category;