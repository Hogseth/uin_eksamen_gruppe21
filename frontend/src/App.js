import "./css/main.css"
import Header from "./components/Header";
import { useState , useEffect} from 'react';
import { fetchAllGames } from "./utils/sanity/showServices";

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

const [gametitles, setShows] = useState(null)
async function getShows() {
  const data = await fetchAllGames()
  setShows(data)
  console.log(data)
}

useEffect(() => {
  getShows()
}, [])
  
  return (
    <div className="App">
      <Header />
    </div>
    
  );
  
  
}


export default App;
