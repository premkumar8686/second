import React from 'react';
import { Link, Outlet, useParams ,useNavigate } from 'react-router-dom';

const Contactus = () => {
const {sete}=useParams();

const navigate=useNavigate();
const test=()=>{
    alert(55);
    navigate("about-us"),{
        state:"viddu"
    }
}


  return <div>
      <h1>{sete}</h1>
      <h1>Contact Us</h1>
      <h2> <Link to="vidhu"> Vidhu </Link> </h2>
      <h2> <Link to="shiva"> Shiva </Link> </h2>
      <button onClick={test}>Click me</button>
      <Outlet/>
  </div>;
  
};

export default Contactus;
