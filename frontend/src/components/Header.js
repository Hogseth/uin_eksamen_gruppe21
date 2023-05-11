import logo from '../images/macslogo_white.png'
import userimg from '../images/userimage.png'
import menu from '../images/hamburger.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(
        <>
            <header>
                <Link to="/">
                <img src={logo} />
                </Link>
                
                <section id="top">
                    <Link to="gameshop"><p>Shop</p></Link>
                    <Link to="mygames"><p>My Games</p></Link>
                    <Link to="favorites"><p>Favourites</p></Link>
                    <img id="profilepicture" src={userimg} />
                    <p>USERNAME</p>
                    <img id="menu" src={menu} onClick={toggleMenu} />
                </section>
            </header>
            <nav id="list" className={`${showMenu ? "show" : ""}`}>
                <a>USERNAME</a>
                <Link to="gameshop"><p>Shop</p></Link>
                <Link to="mygames"><p>My Games</p></Link>
                <Link to="favorites"><p>Favourites</p></Link>
            </nav>
        </>
    )
}
