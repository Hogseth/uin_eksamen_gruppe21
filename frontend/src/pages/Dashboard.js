import Favorites from "../components/Favorites";
import GameShop from "../components/GameShop";
import MyGames from "../components/MyGames";

export default function Dashboard(){
    return(
        <>
        <GameShop />
        <section id="games">
            <MyGames />
            <Favorites />
        </section>
        </>
    )
}