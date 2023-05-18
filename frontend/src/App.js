import "./css/main.css";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./pages/Layout";
import GameShopPage from "./pages/GameShopPage";
import MyGamesPage from "./pages/MyGamesPage";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import GamePage from "./pages/GamePage";
import { useState, useEffect } from "react";
import { fetchAllGames } from "./utils/sanity/showServices";
const App = () => {
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
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='favorites' element={<FavoritesPage/>}/>
          <Route path='gameshop' element={<GameShopPage/>}/>
          <Route path='mygames' element={<MyGamesPage/>}/>
          <Route path='mygames/:slug' element={<GamePage games={games}/>}/>
          <Route path='favorites/:slug' element={<GamePage games={games}/>}/>
        </Route>
      </Routes>
  );
  
  
}


export default App;
