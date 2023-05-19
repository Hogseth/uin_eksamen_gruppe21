import Favorites from "../components/Favorites";
import GameShop from "../components/GameShop";
import MyGames from "../components/MyGames";

export default function Dashboard({api_key}){
    return(
        <>
        <GameShop api_key={api_key}/>
        <section id="games">
            <MyGames api_key={api_key}/>
            <Favorites api_key={api_key}/>
        </section>
        </>
    )
}