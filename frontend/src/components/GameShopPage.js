import { useState, useEffect } from 'react';


export default function GameShopPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const apiKey = '9334c7d3b22742539c1b4fd26c6d27a3';
      const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
      const data = await response.json();
      const gameshopGames = data.results

      const updatedGames = await Promise.all(
        gameshopGames.map(async (game) => {
        const gameResponse = await fetch(`https://api.rawg.io/api/games/${game.id}?key=${apiKey}`);
        const gameData = await gameResponse.json();
        const storeResponse = await fetch(`https://api.rawg.io/api/games/${game.id}/stores?key=${apiKey}`);
        const storeData = await storeResponse.json();
        const firstStore = storeData.results[0];




        return {

            id: game.id,
            name: gameData.name,
            genre: gameData.genres.map((genre) => genre.name).join(', '),
            image: game.background_image,
            storeUrl: firstStore.url,
          };
        })
      );

      setGames(updatedGames);
      
    }


    fetchGames();
  }, []);

  const openStoreLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
     
      <section id="gameshop-page">
        {games.map((game) => (
          <div className="con" key={game.id}>
            <img className="gameImg" src={game.image} alt={game.name} />
              <h2>{game.name}</h2>
              <h3>{game.genre}</h3>
              <a className="store-btn" href='#' onClick={() => openStoreLink(game.storeUrl)} style={{ cursor: 'pointer' }}>BUY</a>
          </div>
        ))}
      </section>
    </>
  );
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//https://www.w3schools.com/jsref/met_win_open.asp