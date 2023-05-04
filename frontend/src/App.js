import "./css/main.css";
import Header from "./components/Header";
import {useEffect, useState} from "react";

function App() {

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
    </div>
    
  );
  
  
}


export default App;
