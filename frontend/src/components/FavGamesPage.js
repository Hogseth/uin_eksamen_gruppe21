import React, { useState, useEffect } from "react";
import { fetchFavoriteGames } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";
const FavGamesPage = () => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({}); 
   const [setGameCount] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchFavoriteGames();
      setGames(allGames);
      //setGameCount(await favoriteGameCount()); //
      allGames.forEach(game => {
        fetchGameDetails('28051d509bd94f1d98dfc83a47f631c4', game.api_id);
      });
    }; 
    fetchData();
    }, []);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  const fetchGameDetails = (apiKey, apiId) => {
      const url = `https://api.rawg.io/api/games/${apiId}?key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
         setGameDetails(gameDetails => {
          return {
            ...gameDetails,
            [apiId]: data
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
//https://www.w3schools.com/jsref/api_fetch.asp
  return (
    <article className="my-games">
      {games.map((game) => (
        
          <div className="con" key={game.api_id}>
           <Link to={{
                pathname: `/favorites/${game.game_title
                  .toLowerCase()
                  .replace(/[^\w\s]+/g, "")
                  .replace(/\s+/g, "-")}`,
            }}>
                <h2>{game.game_title}</h2>
                <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
            </Link>

          <p>{game.hours_played} hours played</p>
          <p>
          <strong>Genres:</strong>{" "}
            {game.game_genres.map((genre, index) => (
              <span key={genre.genre_slug.current}>
                {index > 0 && ", "}
                {genre.genre_title}
              </span>
            ))}
          </p>
          {gameDetails[game.api_id] && (
            <p><strong>Released:</strong> {gameDetails[game.api_id].released}</p>
          )}
        </div>
      ))}
    </article>
  );
};

export default FavGamesPage; 
