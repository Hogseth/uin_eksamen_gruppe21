import { fetchAllGames } from "../utils/sanity/showServices"
export default function GameShop(){
    return(
        <>
        <div id="gameshop-title">
            <h2>GAMESHOP</h2>
            <a>Visit Shop</a>
        </div>
        <section id="shop-section">
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <a>BUY</a>
                </div>
            </div>
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <a>BUY</a>
                </div>
            </div>
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <a>BUY</a>
                </div>
            </div>
        </section>
        </>
    )
}