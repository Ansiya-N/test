import React,{useContext} from "react";
import "./HomeBanner.css"
import BannerImage from "../../Assets/HeaderImage 1.png";
import { ThemeContext } from '../../ThemeContext';
function HomeBanner(props){

     const darktheme=useContext(ThemeContext)
        
    return(

<section className={`homebanner ${darktheme?"dark-grey":""}`}>
    <div className="homebannertexts">
        <div className="text1">Branding | Image making </div>
        <div className="text2">Visual Designer</div>
        <div className="text3">This is a template Figma file, turned into code using Anima.<br/>
            Learn more at AnimaApp.com</div>
        <div className="button"><button className="contact" onClick={()=>{props.setModal(true)}}>Contact</button></div>

    </div>
    <div >

        <img src={BannerImage} alt=""/>
    </div>
</section>
    );
}
export default HomeBanner;