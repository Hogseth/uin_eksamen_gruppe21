import React, { useState, useEffect } from "react";
import { fetchFavoriteGames } from "../utils/sanity/showServices";
import { favoriteGameCount } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";
const FavoriteGamesCount = () => {
  const [games, setGames] = useState([]);
  const [gameDetails, setGameDetails] = useState({}); 
   const [gameCount, setGameCount] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      const allGames = await fetchFavoriteGames();
      setGames(allGames);
      setGameCount(await favoriteGameCount());
      allGames.forEach(game => {
        fetchGameDetails('9334c7d3b22742539c1b4fd26c6d27a3', game.api_id);
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


  return (
      <>{gameCount}</>
  );
};






export default FavoriteGamesCount;