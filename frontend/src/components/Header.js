import logo from '../images/macslogo_white.png'
import userimg from '../images/userimage.png'

export default function Header() {
    return(
        <header>
        <img src={logo}/>
        <nav>
            <p>Shop</p>
            <p>My Games</p>
            <p>Favourites</p>
            <img src={userimg} />
            <p>USERNAME</p>
        </nav>
        </header>
    )
}