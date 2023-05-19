import "./css/main.css";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./pages/Layout";
import GameShopPage from "./pages/GameShopPage";
import MyGamesPage from "./pages/MyGamesPage";
import { Route, Routes, Redirect } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import GamePage from "./pages/GamePage";

function App() {

  // api key
  const api_key = ""


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard api_key={api_key}/>} />
          <Route path='favorites' element={<FavoritesPage api_key={api_key}/>}>
          </Route>
          <Route path='gameshop' element={<GameShopPage api_key={api_key}/>}>
          </Route>
          <Route path='mygames' element={<MyGamesPage api_key={api_key}/>}>
          </Route>
          <Route path=":slug" element={<GamePage api_key={api_key}/>}/>
        </Route>
      </Routes>
  );
  
  
}


export default App;
