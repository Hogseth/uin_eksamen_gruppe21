import FavGamesPage from "../components/FavGamesPage"
import FavoriteGamesCount from "../components/FavoriteGamesCount"

export default function FavoritesPage({api_key}){
    return(
        <>
        <h1>Favorite Games(<FavoriteGamesCount/>): </h1>
        <FavGamesPage api_key={api_key}/>
        </>
    )
}