import GamesPage from "../components/GamesPage"
import MyGamesCount from "../components/MyGamesCount"
export default function MyGamesPage({api_key}){
    return(
        <>
        
        <h1>My games Library(<MyGamesCount/>):</h1>
        <GamesPage api_key={api_key}/>
        </>
        
    )
}