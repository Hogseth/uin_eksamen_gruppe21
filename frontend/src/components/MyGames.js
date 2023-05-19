import React, { useState, useEffect } from "react";
import { fetchAllGames } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";

const MyGames = () => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchAllGames();
      setGames(allGames);

      allGames.forEach(game => {
        const apiKey = '28051d509bd94f1d98dfc83a47f631c4';
        const apiId = game.api_id;
        const url = `https://api.rawg.io/api/games/${apiId}?key=${apiKey}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setGameDetails(gameDetails => ({ ...gameDetails, [apiId]: data }));
          })
          .catch(error => console.error(error));
      });
    };
    fetchData();
  }, []);
  
  const countGames = () => games.length;

  return (
    
    <article id="mygames-desk">
      <Link to="/mygames">
      <p className="btn">Go to libary</p>
      </Link>
      <h2>My Games ({countGames()} Games) </h2>
      <div id="mygamecard">
        {games.slice(0, 4).map(game => (
        <div key={game.api_id}>
          <Link to={`../${game.game_title.replace(/\s/g, '-').replace(":", "").toLowerCase()}`}>
          <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
          <h2>{game.game_title}</h2>
          </Link>
          <p><strong>{game.hours_played}</strong> Hours played</p>
          <p>
            <strong>Genres:</strong>{" "}
            {game.game_genres.map((genre, index) => (
              <span key={genre.genre_slug.current}>
                {index > 0 && ", "}
                {genre.genre_title}
              </span>
            ))}</p>
        </div>
      ))}
      </div>
    </article>
  );
};
//https://www.w3schools.com/react/react_props.asp
export default MyGames;
