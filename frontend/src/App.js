import "./css/main.css";
import Header from "./components/Header";
import {useEffect, useState} from "react";
import GameShop from "./components/GameShop";
import MyGames from "./components/MyGames";
import Favorites from "./components/Favorites";
import { fetchAllGames } from "./utils/sanity/showServices";
import GamePage from "./components/GamePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {

  
  const [games, setGames] = useState([])

  const getGames = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=28051d509bd94f1d98dfc83a47f631c4`)
    const data = await response.json()
    console.log(data)
    setGames(data)
  }

useEffect(() =>{
  getGames()
},[])

const [gametitles, setShows] = useState(null)
async function getShows() {
  const data = await fetchAllGames()
  setShows(data)
}

useEffect(() => {
  getShows()
}, [])
/*
  return (
    <div className="App">
      <Header />
      <GameShop />
      <section id="games">
        <MyGames getShows={getShows} setShows={setShows} gametitles={gametitles}/>
        <Favorites />
      </section>
    </div>
    
  );*/
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main getShows={getShows} gametitles={gametitles}/>}/>
          <Route path=':slug' element={<GamePage gametitles={gametitles} games={games}/>}/>
        </Route>
      </Routes>
  );
  
}


export default App;
