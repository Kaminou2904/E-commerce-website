import Mouse from "../Images/mouse.jpg"
import KeyboardImg from "../Images/keyboard.jpg"
import rgbBoard from "../Images/rgbBoard.png"
import speakers from '../Images/speakers.webp'
import webCam from '../Images/webCam.jpeg'
import grafic from '../Images/grafic.jpeg'
import combo from '../Images/combo.webp'
import combo2 from '../Images/combo2.jpeg'
import monitor from '../Images/monitor.jpg'

function All(){
    return(
        <div className="products">
                <div className="items">
                    <img src={Mouse} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 299 <span className="OPrice">&#8377; 999</span></p>
                    <p className="product-name">Awesome Mouse</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={KeyboardImg} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 599 <span className="OPrice">&#8377; 1999</span></p>
                    <p className="product-name">Silent Keyboard</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={rgbBoard} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 1599 <span className="OPrice">&#8377; 2999</span></p>
                    <p className="product-name">RGB Keyboard</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={speakers} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 499 <span className="OPrice">&#8377; 600</span></p>
                    <p className="product-name">Boom Speakers</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={webCam} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 999 <span className="OPrice">&#8377; 2500</span></p>
                    <p className="product-name">Web Camera</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={grafic} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 10,299 <span className="OPrice">&#8377; 15,999</span></p>
                    <p className="product-name">RTX Graphic Card</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={combo} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 1499 <span className="OPrice">&#8377; 3999</span></p>
                    <p className="product-name">Mouse & Keyboard</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={combo2} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 2999 <span className="OPrice">&#8377; 4999</span></p>
                    <p className="product-name">RGB Mouse & Keyboard</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
                <div className="items">
                    <img src={monitor} alt="mouse" className="itemImg"/>
                    <p className="dPrice">&#8377; 15,999 <span className="OPrice">&#8377; 19,999</span></p>
                    <p className="product-name">Monitor</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-btn">Add to cart</button>
                </div>
            </div>
    );
}

export default All;