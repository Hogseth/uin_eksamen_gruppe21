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

  return (
    <div>
      <h1>My Games</h1>
      {games.map((game) => (
        <div key={game.api_id}>
          <h2>{game.game_title}</h2>
          <p>{game.hours_played} hours played</p>
          <p>
  Genres:{" "}
  {game.game_genres.map((genre, index) => (
    <span key={genre.genre_slug.current}>
      {genre.genre_title}
      {index < game.game_genres.length - 1 && " "}
    </span>
  ))}
</p>

        </div>
      ))}
    </div>
  );
};

export default MyGames;

