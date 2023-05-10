import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function GamePage({games, gametitles}){

    console.log(gametitles)
    const {slug} = useParams()
    console.log(slug)
    const game = gametitles?.slug?.find((game) => game?.slug.replace(/\s/g, "-").toLowerCase() === slug)
    //const gameinfo = gametitles?.api_id?

    const [gameinfo, setGameinfo] = useState([])

  const getGameinfo = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=28051d509bd94f1d98dfc83a47f631c4?api_id=${gametitles?.api_id}`)
    const data = await response.json()
    console.log(data)
    setGameinfo(data)
  }



    return(
        <>
        <span>{game?.name}</span>
        <div id="gameprofile" >
            <img src="https://placehold.jp/150x150.png"/>
            <div id="gameinformation">
                <span>SJANGER</span>
                <span>tags</span>
                <span>devs</span>
                <span>publisher</span>
                <span>release</span>
                <span>platforms</span>
                <span>stores</span>
            </div>
            
        </div>
        </>
    )
}