import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom"; 
import Vidhu from "./Components/Vidhu";
import Shiva from "./Components/Shiva";


function App() {
  return (
    <div className="App">

   <Router>

     <Menu/>

     <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about-us" element={<Aboutus/>}/>
        
        <Route path="contact-us" element={<Contactus/>}>
          {/* <Route path="vidhu" element={<Vidhu/>}/>
          <Route path="shiva" element={<Shiva/>}/> */}
          <Route path=":sete" element={<Vidhu/>} />
        </Route>
        
     </Routes>

     
      
      
    
  </Router>

    </div>
  );
}

export default App;
