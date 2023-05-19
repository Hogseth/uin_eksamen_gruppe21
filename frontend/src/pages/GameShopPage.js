import GameShopPage from '../components/GameShopPage'
export default function GameShopPages({api_key}){
    return(
        <>
        <h1>Gameshop</h1>
        <GameShopPage api_key={api_key}/>
        </>
    )
}