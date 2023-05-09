import "./css/main.css";
import Header from "./components/Header";
import {useEffect, useState} from "react";
import GameShop from "./components/GameShop";
import MyGames from "./components/MyGames";
import Favorites from "./components/Favorites";
import MyGamesPage from "./components/MyGamesPage";
import Footer from "./components/Footer";

function App() {

  /*
  const [games, setGames] = useState([])

  const getGames = async() =>{
    const response = await fetch(`https://api.rawg.io/api/games?key=28051d509bd94f1d98dfc83a47f631c4`)
    const data = await response.json()
    console.log(data)
    
  }

useEffect(() =>{
  getGames()
},[])


  return (
    <div className="App">
      <Header />
      <GameShop />
      <section id="games">
        <MyGames />
        <Favorites />
      </section>
    </div>
    
  );*/

  return (
    <div className="App">
      <MyGamesPage/>
      <Footer/>
    </div>
    
  );
  
  
}


export default App;
