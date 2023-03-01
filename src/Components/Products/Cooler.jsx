import cooler from '../Images/cooler.webp'
import cooler1 from '../Images/cooler1.jpg'
import cooler2 from '../Images/cooler2.webp'
import cooler3 from '../Images/cooler3.webp'
import cooler4 from '../Images/cooler4.avif'
import cooler5 from "../Images/cooler5.webp"
import cooler6 from '../Images/cooler6.png'
import cooler7 from '../Images/cooler7.jpg'
import cooler8 from '../Images/cooler8.jpg'

function Cooler() {
    return (
        <div className="products">
            <div className="items">
                <img src={cooler} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 499 <span className="OPrice">&#8377; 600</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler1} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 699 <span className="OPrice">&#8377; 900</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler2} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 1599 <span className="OPrice">&#8377; 2999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler3} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 4599 <span className="OPrice">&#8377; 5999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler4} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 1299 <span className="OPrice">&#8377; 3000</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler5} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 599 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler6} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 5999 <span className="OPrice">&#8377; 8999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler7} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 7999 <span className="OPrice">&#8377; 9999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={cooler8} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 3999 <span className="OPrice">&#8377; 5999</span></p>
                <p className="product-name">Cooler</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Cooler;