import React,{useContext} from "react";
import "./Latest-Work.css";
import LatestWorkImage1 from "../../Assets/Image.png";
import LatestWorkImage2 from "../../Assets/Image (1).png";
import LatestWorkImage3 from "../../Assets/Image (2).png";
import LatestWorkImage4 from "../../Assets/Image (3).png";
import LatestWorkImage5 from "../../Assets/Image (4).png";
import LatestWorkImage6 from "../../Assets/Image (5).png";
import { ThemeContext } from '../../ThemeContext';

function LatestWork(){
     const darktheme=useContext(ThemeContext)
           
    let latestwork=[
        {image:LatestWorkImage1,
            heading:"Community Connector",

            dec:"UI, Art drection"
        },
        {image:LatestWorkImage2,
            heading:"Neighborhood ",
            dec:"UI, Network drection"
        },
        {image:LatestWorkImage3,
            heading:"Local Link",
            dec:"UI, Local  drection"
        },
        {image:LatestWorkImage4,
            heading:"Unity Hub",
            dec:"UI, Unity drection"
        },
        {image:LatestWorkImage5,
            heading:"Social Circle",
            dec:"UI, Social drection"
        },
        {image:LatestWorkImage6,
            heading:"Harmonious Haven",
            dec:"UI, Harmonious drection"
        }
    ]
    return(
<section className={`latestwork-container ${darktheme?"dark-grey":""}`}>
    <h1 className="latestworkheading">Latest work</h1>
    <div className={`latestworkcontents ${darktheme?"dark-grey":""}`}>


        {

            latestwork.map((item)=>(

                <div>
                <div><img className="latestworkimage"src={item.image} alt="img"/></div>
              
              <div className="latestworkcontent-1">{item.heading}</div> 
              <div className="latestworkcontent-2">{item.dec} </div>
            
            </div>
            ))
        }
      
   </div>
</section>

    );
}

export default LatestWork;