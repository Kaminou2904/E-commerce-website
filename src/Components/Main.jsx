import AddImg from "./Images/add.jpg"
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./Products/All"
import Mouse from "./Products/Mouse"
import Keyboard from "./Products/Keyboard";
import Monitor from "./Products/Monitor";
import Speaker from "./Products/Speaker";
import Grafic from "./Products/Grafic";
import Memory from "./Products/Memory";
import Ram from "./Products/Ram";
import Cooler from "./Products/Cooler";
import RB from "./Products/RB";
import Headphone from "./Products/Headphone";

function Main(){
    return(
        <div className="main">
            <div className="mainAdd">
                <img src={AddImg} alt="add" />
            </div>
            
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<All/>}/>
                    <Route path="/mouse" element={<Mouse/>}/>
                    <Route path="/keyboard" element={<Keyboard/>}/>
                    <Route path="/monitor" element={<Monitor/>}/>
                    <Route path="/speaker" element={<Speaker/>}/>
                    <Route path="/grafic" element={<Grafic/>}/>
                    <Route path="/memory" element={<Memory/>}/>
                    <Route path="/ram" element={<Ram/>}/>
                    <Route path="/cooler" element={<Cooler/>}/>
                    <Route path="/rb" element={<RB/>}/>
                    <Route path="/headphone" element={<Headphone/>}/>
                </Routes>
            </Router>
            
        </div>
    )
}

export default Main;

