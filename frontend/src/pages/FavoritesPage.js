import FavGamesPage from "../components/FavGamesPage"
import FavoriteGamesCount from "../components/FavoriteGamesCount"

export default function FavoritesPage(){
    return(
        <>
        <h1>Favorite Games(<FavoriteGamesCount/>): </h1>
        <FavGamesPage/>
        </>
    )
}