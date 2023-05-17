import React, { useState, useEffect } from "react";
import { fetchAllGames } from "../utils/sanity/showServices";
import { Link } from "react-router-dom";

const MyGamesCount = () => {
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
<>{countGames()}</>
  );
};
//https://www.w3schools.com/react/react_props.asp
export default MyGamesCount;
