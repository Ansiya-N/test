import React, {  useState } from 'react';

import Branding from '../Components/Branding/Branding';
import ThreeCardSection from '../Components/Three-Card-Section/Three-Card-Section';
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import LatestWork from '../Components/Latest-Work/Latest-Work'; 
import Testimonial from '../Components/Testimonial/Testimonial';
import Footer from '../Components/Footer/Footer';
import ContactModal from '../Components/ContactModal/ContactModal';
function Home() {
  const [modal,setModal]=useState(false)
  
  
  return (
     <div className='home-container'>
   <ContactModal  modal={modal} setModal={setModal}/>
   <HomeBanner setModal={setModal}/>
   <Branding/>
   <ThreeCardSection/>
   <LatestWork/>
   <Testimonial/>
   <Footer/>
   </div>
  );
}

export default Home;
