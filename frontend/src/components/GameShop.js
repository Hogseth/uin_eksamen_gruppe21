import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GameShop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const apiKey = '28051d509bd94f1d98dfc83a47f631c4';
      const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=1`);
      const data = await response.json();
      const slicedGames = data.results.slice(0, 3);

      const updatedGames = await Promise.all(
        slicedGames.map(async (game) => {
        const gameResponse = await fetch(`https://api.rawg.io/api/games/${game.id}?key=${apiKey}`);
        const gameData = await gameResponse.json();
        const storeResponse = await fetch(`https://api.rawg.io/api/games/${game.id}/stores?key=${apiKey}`);
        const storeData = await storeResponse.json();
        const firstStore = storeData.results[0];
        console.log(data)



        return {
            id: game.id,
            next: data.next,
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
      <div id="gameshop-title">
        <h2>GAMESHOP</h2>
        <Link to="gameshop">
          <p>Visit Shop</p>
        </Link>
      </div>
      <section id="shop-section">
        {games.map((game) => (
          <div className="container" key={game.id}>
            <img className="gameImg" src={game.image} alt={game.name} />
            <div className="games-info">
            <h2>{game.name}</h2>
            <h3>{game.genre}</h3>
              <a className="btn" href='#' onClick={() => openStoreLink(game.storeUrl)} style={{ cursor: 'pointer' }}>BUY</a>
            </div>
          </div>
        ))}
      </section>
      
    </>
  );
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//https://www.w3schools.com/jsref/met_win_open.asp