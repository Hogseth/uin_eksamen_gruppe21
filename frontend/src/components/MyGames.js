import { useEffect } from "react"

export default function MyGames({getShows, gametitles}){

    useEffect(() => {
        getShows()
      }, [])

      console.log(gametitles)

    return(
        <>
        <div id="games-showcase">
            <h2 id="mygames-title">MY GAMES-LIBRARY (21 games)</h2>
        <section id="mygames">
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>data</h2>
                    <h3>Action</h3>
                    <p>Hours played: 10</p>
                </div>
            </div>
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <p>Hours played: 10</p>
                </div>
            </div>
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <p>Hours played: 10</p>
                </div>
            </div>
            <div className="container">
                <img src="https://placehold.jp/150x150.png"/>
                <div className="games-info">
                    <h2>TITLE</h2>
                    <h3>Action</h3>
                    <p>Hours played: 10</p>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}