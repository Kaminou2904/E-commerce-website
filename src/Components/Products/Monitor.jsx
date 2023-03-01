import monitor from '../Images/monitor.jpg'
import curvMonitor from '../Images/curvMonitor.jpg'
import sunMonitor from '../Images/sunMonitor.jpg'
import windowMonitor from '../Images/windowMonitor.jpg'
import wideMonitor from '../Images/widMonitor.jpg'
import viewSonic from '../Images/viewSonic.png'
import benq from '../Images/benq.jpg'
import asus from '../Images/asus.jpg'
import curv from '../Images/curv.webp'

function Monitor() {
    return (
        <div className="products">
            <div className="items">
                <img src={monitor} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 15,999 <span className="OPrice">&#8377; 19,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={curvMonitor} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 17,999 <span className="OPrice">&#8377; 21,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={sunMonitor} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 25,999 <span className="OPrice">&#8377; 39,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={windowMonitor} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 40,999 <span className="OPrice">&#8377; 60,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={wideMonitor} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 15,999 <span className="OPrice">&#8377; 30,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={viewSonic} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 9,999 <span className="OPrice">&#8377; 13,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={benq} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 60,999 <span className="OPrice">&#8377; 78,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={asus} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 14,999 <span className="OPrice">&#8377; 15,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={curv} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 10,999 <span className="OPrice">&#8377; 13,999</span></p>
                <p className="product-name">Monitor</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Monitor;