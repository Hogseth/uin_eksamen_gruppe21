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
                <section id="top">
                    <a>Shop</a>
                    <a>My Games</a>
                    <a>Favorites</a>
                    <img id="profilepicture" src={userimg} />
                    <a>USERNAME</a>
                    <img id="menu" src={menu} onClick={toggleMenu} />
                </section>
            </header>
            <nav id="list" className={`${showMenu ? "show" : ""}`}>
                <a>USERNAME</a>
                <a>Shop</a>
                <a>My Games</a>
                <a>Favorites</a>
            </nav>
        </>
    )
}
