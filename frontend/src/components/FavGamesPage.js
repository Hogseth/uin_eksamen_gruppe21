import React, { useState, useEffect } from "react";
import { fetchFavoriteGames } from "../utils/sanity/showServices";
import { favoriteGameCount } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";
const FavGamesPage = () => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({}); 
   const [gameCount, setGameCount] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchFavoriteGames();
      setGames(allGames);
      setGameCount(await favoriteGameCount());
      allGames.forEach(game => {
        fetchGameDetails('3cf4f9ea58da46afa7bdc7f1679a8629', game.api_id);
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
    <article className="gamecard">
        
      <h2>My Favorites ({gameCount} Games) </h2>
      {games.map((game) => (
        <div key={game.api_id}>
          <h2>{game.game_title}</h2>
          <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
          <p>{game.hours_played} hours played</p>
          <p>
            Genres:{" "}
            {game.game_genres.map((genre, index) => (
              <span key={genre.genre_slug.current}>
                {index > 0 && ", "}
                {genre.genre_title}
              </span>
            ))}
          </p>
          {gameDetails[game.api_id] && (
            <p>Released: {gameDetails[game.api_id].released}</p>
          )}
        </div>
      ))}
    </article>
  );
};

export default FavGamesPage; 