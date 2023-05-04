import logo from '../images/macslogo_white.png'
import userimg from '../images/userimage.png'
import menu from '../images/hamburger.png'

export default function Header() {

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
            <img id="menu" src={menu} />
        </section>
        </header>
        <nav id="list">
            <a>USERNAME</a>
            <a>Shop</a>
            <a>My Games</a>
            <a>Favourites</a>
        </nav>
        </>
    )
}