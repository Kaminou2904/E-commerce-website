import speaker from '../Images/speakers.webp'
import speaker2 from '../Images/speaker2.jpg'
import speaker3 from '../Images/speaker3.jpg'
import speaker4 from '../Images/speaker4.jpg'
import speaker5 from '../Images/speaker5.jpg'
import speaker6 from '../Images/speaker6.webp'
import speaker7 from '../Images/speaker7.jpg'
import speaker8 from '../Images/speaker8.webp'
import speaker9 from '../Images/speaker9.webp'

function Speaker() {
    return (
        <div className="products">
            <div className="items">
                <img src={speaker} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 499 <span className="OPrice">&#8377; 600</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker2} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 2999 <span className="OPrice">&#8377; 3999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker3} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 6799 <span className="OPrice">&#8377; 9000</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker4} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 4999 <span className="OPrice">&#8377; 6999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker5} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 599 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker6} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 1599 <span className="OPrice">&#8377; 4999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker7} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 2549 <span className="OPrice">&#8377; 4999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker8} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 799 <span className="OPrice">&#8377; 1299</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={speaker9} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 899 <span className="OPrice">&#8377; 3999</span></p>
                <p className="product-name">Boom Speakers</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Speaker;