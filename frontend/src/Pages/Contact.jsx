
import React ,{useRef, useState}from "react";
import "./Contact.css";
import BGIMAGE from "../Assets/bg-Image.png"
import Footer from "../Components/Footer/Footer";
function Contact() {
  
  /*const formRef=useRef();
  console.log (formRef.current?.firstChild?.firstChild?.value,"hlo")*/
 const [formData,setFormData]=useState({name:"",email:"",phone:"",msg:""});
  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
<>
    <div className="formcontainer1">
        <img src={BGIMAGE} alt="img"/>
    <div className="main1">
    <h1 className="heading1">Get in Touch</h1>
       
       <form onSubmit={onSubmit}>
      
        <div className="labels1">
       <input type="text" className="label11" placeholder="Name" name="name"  onChange={(e)=>handleChange(e)}/>
  <input type="email"  className="label11" placeholder="Email" name="emails" onChange={(e)=>handleChange(e)}/>
  </div>
  <input type="tel" className="label21" placeholder="Phone Number" name="phone" onChange={(e)=>handleChange(e)}/>
  <textarea type="text" className="label31" placeholder="Message" name="msg" onChange={(e)=>handleChange(e)}/>
  <button className="btn1" type="submit" >Submit</button>
       </form>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
