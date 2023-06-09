import React, { useState, useEffect } from "react";
import { fetchFavoriteGames } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";

const FavGamesPage = ({api_key}) => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({}); 
   const [setGameCount] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchFavoriteGames();
      setGames(allGames);
      //setGameCount(await favoriteGameCount()); //
      allGames.forEach(game => {
        fetchGameDetails(`${api_key}`, game.api_id);
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
    <section className="my-games">
      {games.map((game) => (
        <div className="con"key={game.api_id}>
          <Link to={`../${game.game_title.replace(/\s/g, '-').replace(":", "").toLowerCase()}`}>
          <h2>{game.game_title}</h2>
          <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
          </Link>
          <p><strong>{game.hours_played}</strong> hours played</p>
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
    </section>
  );
};

export default FavGamesPage; 
