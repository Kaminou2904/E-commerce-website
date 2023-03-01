import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <div className="categories">
            <Link className={toggleState === 1 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(1)} to="/"  >All</Link>
            <Link  className={toggleState === 2 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(2)} to="/mouse" >Mouse</Link>
            <Link  className={toggleState === 3 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(3)} to="/keyboard" >Keyboard</Link>
            <Link  className={toggleState === 4 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(4)} to="/monitor" >Monitor</Link>
            <Link  className={toggleState === 5 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(5)} to="/speaker" >Speaker</Link>
            <Link  className={toggleState === 6 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(6)} to="/grafic" >Graphic</Link>
            <Link  className={toggleState === 7 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(7)} to="/memory" >Memory</Link>
            <Link  className={toggleState === 8 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(8)} to="/ram" >Ram</Link>
            <Link className={toggleState === 9 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(9)} to="/cooler" >Cooler</Link>
            <Link  className={toggleState === 10 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(10)} to="/rb" >Raspberry</Link>
            <Link  className={toggleState === 11 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(11)} to="/headphone" >Headphone</Link>
        </div>
    );
}

export default Navbar;