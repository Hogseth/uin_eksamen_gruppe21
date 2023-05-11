import GamesPage from "../components/GamesPage"
import MyGamesCount from "../components/MyGamesCount"
export default function MyGamesPage(){
    return(
        <>
        
        <h1>My games Library(<MyGamesCount/>):</h1>
        <GamesPage/>
        </>
        
    )
}