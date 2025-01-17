
import React from "react";
import "./ContactModal.css"
function ContactModal(props) {

  return (
    <div className={ `formcontainer ${props.modal?"activemodal":""}`}>
       
    <div className="main">
       <h1 className="heading">Get in Touch</h1>
       <button className="close-modal" onClick={()=>{props.setModal(false)}}>X</button>
       <form >
        <div className="labels">
       <input type="text" className="label1" placeholder="Name"/>
  <input type="email"  className="label1" placeholder="Email"/>
  </div>
  <input type="tel" className="label2" placeholder="Phone Number"/>
  <textarea type="text" className="label3" placeholder="Message"/>
  <button className="btn" type="submit">Submit</button>
       </form>
    </div>
    </div>
  );
}

export default ContactModal;
