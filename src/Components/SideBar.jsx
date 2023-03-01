import LogoImg from "./Images/MyLogo.png";

function SideBar(){

    let navToggler = ()=>{
        let sideId = document.getElementById('sideId');
        if (sideId.style.left === '0px') {
            sideId.style.left = '-320px'
        }else{
            sideId.style.left = '0px'
        }
    }

    // document.getElementById('hamburg').addEventListener('click', navToggler);

    return(
        <>
        <div className="sideBar" id="sideId">
            <h1 className="brand h2" style={{color: "green"}}><span><img src={LogoImg} alt="logo" className="logoImg"/></span> E - Commerce</h1>
            <ul className="myUl">
                <li>Home</li>
                <li>Trending</li>
                <li>About</li>
                <li>My Cart</li>
            </ul>
        </div>
        <div className="nav">
            <div className="hamburger">
                <div className="burger" id="hamburg" onClick={navToggler}>
                    <div className="burg"></div>
                    <div className="burg"></div>
                    <div className="burg"></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SideBar;