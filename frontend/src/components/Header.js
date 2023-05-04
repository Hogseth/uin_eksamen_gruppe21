import logo from '../images/macslogo_white.png'
import userimg from '../images/userimage.png'
import menu from '../images/hamburger.png'
import { useState } from 'react';

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(
        <>
            <header>
                <img src={logo}/>
                <section>
                    <p>Shop</p>
                    <p>My Games</p>
                    <p>Favourites</p>
                    <img id="profilepicture" src={userimg} />
                    <p>USERNAME</p>
                    <img id="menu" src={menu} onClick={toggleMenu} />
                </section>
            </header>
            <nav id="list" className={`${showMenu ? "show" : ""}`}>
                <a>USERNAME</a>
                <a>Shop</a>
                <a>My Games</a>
                <a>Favourites</a>
            </nav>
        </>
    )
}
