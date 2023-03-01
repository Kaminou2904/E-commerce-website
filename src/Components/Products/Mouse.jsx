import MouseImg from '../Images/mouse.jpg'
import blackMouse from '../Images/blackMouse.webp'
import gamingMouse from '../Images/gameingMouse.jpg'
import blackMouse2 from '../Images/blackMouse2.webp'
import foxMouse from '../Images/foxMouse.webp'
import logiPink from '../Images/logiPink.jpg'
import greenGamingMouse from '../Images/greenGamingMouse.webp'
import blackApple from '../Images/blackApple.avif'
import whiteMouse from '../Images/whiteMouse.jpg'

function Mouse() {
    return (
        <div className="products">
            <div className="items">
                <img src={MouseImg} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 299 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={blackMouse} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 699 <span className="OPrice">&#8377; 1999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={gamingMouse} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 1299 <span className="OPrice">&#8377; 2999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={blackMouse2} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 499 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={foxMouse} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 899 <span className="OPrice">&#8377; 5999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={logiPink} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 249 <span className="OPrice">&#8377; 999</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={greenGamingMouse} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 899 <span className="OPrice">&#8377; 1249</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={blackApple} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 399 <span className="OPrice">&#8377; 799</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={whiteMouse} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 999 <span className="OPrice">&#8377; 7899</span></p>
                <p className="product-name">Awesome Mouse</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Mouse;