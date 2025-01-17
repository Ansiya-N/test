import React,{useContext} from "react";
import "./Footer.css"
import discord from "../../Assets/discord.png";
import facebook from "../../Assets/facebook.png";
import dribbble from "../../Assets/dribbble.png";
import nstagram from "../../Assets/nstagram.png";
import behance from "../../Assets/behance.png";
import discordwhite from "../../Assets/discord-white.png"
import facebookwhite from "../../Assets/facebook-white.png"
import dribblewhite from "../../Assets/dribbble-white.png"
import nstagramwhite from "../../Assets/nstagram-white.png"
import behancewhite from "../../Assets/behance-white.png"

import { ThemeContext } from '../../ThemeContext'

function Footer(){
    const darktheme=useContext(ThemeContext)
       

    let footer=[{
        whiteimage:discord,
        darkimage:discordwhite
    },
    {
        whiteimage:facebook,
        darkimage:facebookwhite
    },
    {
        whiteimage:dribbble,
        darkimage:dribblewhite
    },
    {
        whiteimage:nstagram,
        darkimage:nstagramwhite
    },
    {
        whiteimage:behance,
        darkimage:behancewhite
    }
]
return(

<section className={`footer ${darktheme?"dark-grey":""}`}>
<div className="footer-heading">Lets work together</div>
<div className="footer-content">

    <div className="footer-content-left">
<p className="footer-desc">This is a template Figma file, turned into code using Anima. Learn<br/> more at AnimaApp.com This is a template Figma file, turned into<br/> code using Anima. Learn more at AnimaApp.com</p>
<div className="social">

{
    footer.map((item)=>(

       
    <img src={`${darktheme?item.darkimage:item.whiteimage} `} alt="img"/>
   

    ))
}
</div>
</div>
<div className="form">
  <input type="text" className="label1" placeholder="Name"/>
  <input type="text"  className="label2" placeholder="Email"/>
   
   <button class="submit">Submit</button>

</div>
</div>

    </section>


);
}

export default Footer;