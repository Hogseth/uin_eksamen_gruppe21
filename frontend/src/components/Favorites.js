import React, { useState, useEffect } from "react";
import { fetchFavoriteGames } from "../utils/sanity/showServices";
import { favoriteGameCount } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";
const Favorites = () => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({}); 
   const [gameCount, setGameCount] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchFavoriteGames();
      setGames(allGames);
      setGameCount(await favoriteGameCount());
      allGames.slice(0, 2).forEach(game => {
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
    <article id="favorites-dash">
        <Link to="/favorites">
        <p className="btn">Go to favorites</p>
        </Link>
        <h2>My Favorites ({gameCount} Games) </h2>
      <div id="favorites-games">
      {games.slice(0, 2).map((game) => (
        <div key={game.api_id}>
          <Link to={`../${game.game_title.replace(/\s/g, '-').toLowerCase()}`}>
          <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
          <h2>{game.game_title}</h2>
          </Link>
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
        </div>
      ))}
      </div>
    </article>
  );
};

export default Favorites; 
