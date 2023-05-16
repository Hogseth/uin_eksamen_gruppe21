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
        const apiKey = '9334c7d3b22742539c1b4fd26c6d27a3';
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
    
    <article className="gamecard">
      <Link to="/mygames">
      <div id="gameshop-title">
          <button>Go to libary</button>
        </div>
      </Link>
      <h2>My Games ({countGames()} Games) </h2>
    
      {games.slice(0, 4).map(game => (
        <div key={game.api_id}>
            <Link to={{
                pathname: `/mygames/${game.game_title}`,
               
            }}>
                <h2>{game.game_title}</h2>
                <img className="gameImg" src={gameDetails[game.api_id]?.background_image} alt={game.game_title} />
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
          {gameDetails[game.api_id] && <p>Released: {gameDetails[game.api_id].released}</p>}
        </div>
      ))}
    
    </article>
    
  );
};
//https://www.w3schools.com/react/react_props.asp
export default MyGames;
