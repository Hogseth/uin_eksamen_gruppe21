import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchId, getGameId } from "../utils/sanity/showServices";
import star from '../images/star.png'

export default function GamePage(){

    var game_id = 0

    const [games, setGames] = useState([])
    const { slug } = useParams();
    console.log(slug)

    const [game, setGame] = useState([]);
    var tags = ""
    var devs = ""
    var platforms = ""
    var stores = ""
    var genres = ""

    useEffect(() =>{
        const fetchData = async () => {
            const game = await getGameId(slug)
            game_id = game[0]
            console.log(game_id)
            console.log(game)
            const reponse = await fetch(`https://api.rawg.io/api/games/${game_id}?key=28051d509bd94f1d98dfc83a47f631c4`)
        const data = await reponse.json()
        console.log(data)
        setGames(data)
        
        setGame(data)
        }
        fetchData()
    },[])

    game?.tags?.map((tag) =>{
        tags += `${tag.name}, `
    })

    
    game?.platforms?.map((platform) =>{
        platforms += `${platform.platform.name}, `
    })


    game?.developers?.map((dev) =>{
        devs += `${dev.name}, `
    })

    game?.stores?.map((store) =>{
        stores += `${store.store.name}, `
    })

    game?.genres?.map((genre) =>{
        genres += `${genre.name}, `
    })

    return(
        <section id="game-page">
        <h1>{game.name}</h1>
        <div id="gamepage-info">
        <img src={game.background_image} alt="game-image"/>
            <aside id="aside-info">
                <div className="info">
                <span><strong>Developers:</strong></span> 
                <span className="info-value">{devs}</span>
                </div>
                <div className="info">
                <span><strong>Genres:</strong></span>
                <span className="info-value">{genres}</span>
                </div>
                <div className="info">
                <span><strong>Stores:</strong></span>
                <span className="info-value">{stores}</span>
                </div>
                <div className="info">
                <span><strong>Release date: </strong></span>
                <span className="info-value">{game.released}</span>
                </div>
                <div className="info">
                <span><strong>Platforms: </strong></span>
                <span className="info-value">{platforms}</span>
                </div>
                <div id="rating">
                <img id="star" src={star}/>
                <span>{game.rating}</span>
                </div>
            </aside>
        </div>
        <p><strong>{game.description_raw}</strong></p>
        <p id="tags"><strong>Tags: </strong>{tags}</p>
        
        </section>
    )
}