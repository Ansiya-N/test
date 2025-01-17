import React,{useContext} from "react";
import "./Three-Card-Section.css";
import ProductDesign from "../../Assets/Skills Card Icon.png"
import VisualDesign from "../../Assets/Skills Card Icon (1).png"
import ArtDirection from "../../Assets/Skills Card.png";
import { ThemeContext } from '../../ThemeContext'
function ThreeCardSection(){
 const darktheme=useContext(ThemeContext)
        
    let cardsection=[


        {
            image:ProductDesign,
            heading:"Product Design",
            desc:"This is a template Figma file"
        },
        {
            image:VisualDesign,
            heading:"Visual Design",
            desc:" turned into code using Anima"
        },
        {
            image:ArtDirection,
            heading:"Art Direction",
            desc:" Learn more at AnimaApp.com"
        }

    ]
    return(
        
<div className={`cardsectioncontainer ${darktheme?"dark":""}`}>
        <section className={`threecardsection ${darktheme?"dark":""}`}>
   {cardsection.map((item)=>(


    <div className={`cardsection-1 ${darktheme?"dark-grey":""}`}>
        
        <div><img src={item.image} alt="img"/></div>
        <div className={`cardsection-2 ${darktheme?"dark-grey":""}`}>{item.heading}</div>
        <div className={`cardsection-3 ${darktheme?"dark-grey":""}`}>{item.desc}</div>

    </div>
   ))
    
}
    
</section>
</div>
    );

    
}

export default ThreeCardSection;