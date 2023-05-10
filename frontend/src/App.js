import "./css/main.css";
import Header from "./components/Header";
import GameShop from "./components/GameShop";
import MyGames from "./components/MyGames";
import Favorites from "./components/Favorites";


function App() {


  return (
    <div className="App">
      <Header />
      <GameShop />
      <section id="games">
        <MyGames />
        <Favorites />
      </section>
    </div>
    
  );
  
  
}


export default App;
