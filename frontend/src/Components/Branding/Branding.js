import React ,{useContext}from "react";
import "./Branding.css"
import BrandImage1  from "../../Assets/Group 5334.png"
import BrandImage2 from "../../Assets/image 1 (Traced).png"
import BrandImage3 from "../../Assets/image 2 (Traced).png"
import BrandImage4 from "../../Assets/image 5 (Traced).png"
import BrandImage5 from "../../Assets/image 7 (Traced).png"
import BrandImage6 from "../../Assets/brand1-whiteicon.png"
import BrandImage7 from "../../Assets/brand2-whiteicon.png"
import BrandImage8 from "../../Assets/brand3-whiteicon.png"
import BrandImage9 from "../../Assets/brand4-whiteicon.png"
import BrandImage10 from "../../Assets/brand5-whiteicon.png"
import { ThemeContext, UpdateThemeContext } from '../../ThemeContext'


function Branding(){

const darktheme=useContext(ThemeContext)
   
    let brandimage=[
        { 
           darkimage :BrandImage1,
            whiteimage:BrandImage6
        },
        {
            darkimage:BrandImage2,
            whiteimage:BrandImage7
        },
        {
            darkimage:BrandImage3,
            whiteimage:BrandImage8
        },
        {
            darkimage:BrandImage4,
           whiteimage:BrandImage9
        },
        {
            darkimage :BrandImage5,
           whiteimage:BrandImage10
        }
        
       
        
        ]
    return(
<section className={`branding-container ${darktheme?"dark":""}`}>
  {
brandimage.map((item)=>(


    <div> <img src={`${darktheme ? item.whiteimage : item.darkimage}`} alt="img" /></div> 
))

  }
    
</section>

    );
}

export default Branding;
