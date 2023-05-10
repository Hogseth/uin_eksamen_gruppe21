import React, { useState, useEffect } from "react";
import { fetchAllGames } from "../utils/sanity/showServices";

const MyGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchAllGames();
      setGames(allGames);
    };
    fetchData();
  }, []);

  const countGames = () => {
    return games.length;
  };

  return (
    <div>
    
      <h2>My Games ({countGames()} Games) </h2>
      
      {games.map((game) => (
        <div key={game.api_id}>
          <h2>{game.game_title}</h2>
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
  );
};

export default MyGames;
