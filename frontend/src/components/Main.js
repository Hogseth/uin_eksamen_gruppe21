import Favorites from "./Favorites";
import GameShop from "./GameShop";
import Header from "./Header";
import MyGames from "./MyGames";

export default function Main({gametitles, getShows}){
    return(
        <>
        <div className="App">
            <Header />
            <GameShop />
            <section id="games">
                <MyGames gametitles={gametitles} getShows={getShows}/>
                <Favorites />
            </section>
        </div>
        </>
    )
}