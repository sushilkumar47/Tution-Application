import Aboutus from './components/Aboutus';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Paymentcart from './components/Paymentcart';
import Paycard from './components/Paycard';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Courses/>
    <Pricing/>
    <Aboutus/>
    <Faculty/>
    <Contactus/>
    <Footer/> 
    <Login/>   
    {/* <Paymentcart/> */}
    {/* <Paycard/> */}
    </>
    // <Router>
    // <div className="container">
    //   <Routes>
    //     <Route path="/Navbar" element={<Navbar/>}/>
    //     <Route path="/Slider" element={<Slider/>}/>
    //     <Route path="/Courses" element={<Courses/>}/>
    //     <Route path="/Pricing" element={<Pricing/>}/>
    //     <Route path="/Aboutus" element={<Aboutus/>}/>
    //     <Route path="/Faculty" element={<Faculty/>}/>
    //     <Route path="/Contactus" element={<Contactus/>}/>
    //     <Route path="/Contactus" element={<Footer/>}/>
    //     <Route path="/Login" element={<Login/>}/>
    //     <Route path="/Paymentcart" element={<Paymentcart/>}/>
    //     <Route path="/Paycard" element={<Paycard/>}/>
    // </Routes>
    // </div>
    
    // </Router>
  );
}

export default App;
