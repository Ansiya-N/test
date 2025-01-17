import React,{useContext} from "react";
import "./Testimonial.css";
import ClientImage from "../../Assets/Client Image.png"
import RatingStar from "../../Assets/Star.png"
import RatingStarwhite from "../../Assets/white-star.png"
import { ThemeContext } from '../../ThemeContext';
function Testimonial(){
 const darktheme=useContext(ThemeContext)
           
 let testimonial=[{
    content:"This is a template Figma file",
    name:"Ansiya",
    company:"Google"

 },


 {
    content:"This is a template Figma file",
    name:"Suhaima",
    company:"Microsoft"

 },
 {
    content:"This is a template Figma file",
    name:"Sanoop",
    company:"UST"
 },
 {
    content:"This is a template Figma file",
    name:"Nandu",
    company:"Exoroo"

 },


 {
    content:"This is a template Figma file",
    name:"Jithin",
    company:"Exoroo"

 },
 {
    content:"This is a template Figma file",
    name:"Aina",
    company:"Technopark"
 }

]
    return(

<section className={`testimonial-main-container ${darktheme?"dark":""}`}>
<h1 className="testimonial-heading">Testimonial</h1>
<div className="testimonial-container">
   
  


   {testimonial.map((item)=>(
    <div className={`testimonial ${darktheme?"dark-grey":""}`}>
     <div className="testimonial-content">{item.content}</div>
     <div className="client-detail">
         <div><img src={ClientImage} alt="img"/></div>
         <div className="client-rating">
         <div className="display-star">
             <img src={`${darktheme?RatingStarwhite:RatingStar}`} alt="img"/>
             <img src={`${darktheme?RatingStarwhite:RatingStar}`} alt="img"/>
             <img src={`${darktheme?RatingStarwhite:RatingStar}`} alt="img"/>
             <img src={`${darktheme?RatingStarwhite:RatingStar}`} alt="img"/>
             <img src={`${darktheme?RatingStarwhite:RatingStar}`} alt="img"/>
         </div>
         
            <div className="client-name">{item.name}</div>
            <div className="client-company">{item.company}</div>
         </div>
     </div>
     </div>
   ))}


</div>
</section>


    )
}

export default Testimonial;