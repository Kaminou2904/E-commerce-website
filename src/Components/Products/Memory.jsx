import memory from "../Images/memory.jpg"
import memory2 from "../Images/memory2.webp"
import memory3 from "../Images/memory3.jpg"
import memory4 from "../Images/memory4.webp"
import memory5 from "../Images/memory5.webp"
import memory6 from "../Images/memory6.jpg"
import memory7 from "../Images/memory7.jpg"
import memory8 from "../Images/memory8.png"
import memory9 from "../Images/memory9.jpg"

function Memory() {
    return (
        <div className="products">
            <div className="items">
                <img src={memory} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 299 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory2} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 899 <span className="OPrice">&#8377; 1999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory3} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 599 <span className="OPrice">&#8377; 1999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory4} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 1999 <span className="OPrice">&#8377; 3999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory5} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 4299 <span className="OPrice">&#8377; 6999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory6} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 8999 <span className="OPrice">&#8377; 10,999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory7} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 4949 <span className="OPrice">&#8377; 6999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory8} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 11,299 <span className="OPrice">&#8377; 12,999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={memory9} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 449 <span className="OPrice">&#8377; 899</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Memory;