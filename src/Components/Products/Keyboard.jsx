import keyboardImg from '../Images/rgbBoard.png'
import whiteRGBboard from '../Images/whiteRGBboard.jpg'
import blackBoard from '../Images/keyboard.jpg'
import mechBoard from '../Images/mechBoard.jpg'
import appleBoard from '../Images/appleKeyboard.jpg'
import rgbboard from '../Images/rgbkeyboard.jpg'
import silentBoard from '../Images/silentBoard.png'
import silentPink from '../Images/silentPink.jpg'
import gamingKeyboard from '../Images/gamingKeyboard.webp'

function Keyboard() {
    return (
        <div className="products">
            <div className="items">
                <img src={keyboardImg} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 3499 <span className="OPrice">&#8377; 6999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={whiteRGBboard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 699 <span className="OPrice">&#8377; 1999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={blackBoard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 5299 <span className="OPrice">&#8377; 8999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={mechBoard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 699 <span className="OPrice">&#8377; 1599</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={appleBoard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 7999 <span className="OPrice">&#8377; 9999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={rgbboard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 5999 <span className="OPrice">&#8377; 7899</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={silentBoard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 2499 <span className="OPrice">&#8377; 4999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={silentPink} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 699 <span className="OPrice">&#8377; 1999</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
            <div className="items">
                <img src={gamingKeyboard} alt="mouse" className="itemImg" />
                <p className="dPrice">&#8377; 799 <span className="OPrice">&#8377; 1299</span></p>
                <p className="product-name">Awesome Keyboard</p>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, doloremque! Quas, praesentium cum veritatis, dicta iure maxime quos sunt id, ut magni accusamus.</p>
                <button className="buy-btn">Buy Now</button>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Keyboard;