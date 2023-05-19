import "./css/main.css";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./pages/Layout";
import GameShopPage from "./pages/GameShopPage";
import MyGamesPage from "./pages/MyGamesPage";
import { Route, Routes, Redirect } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import GamePage from "./pages/GamePage";

function App() {


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='favorites' element={<FavoritesPage/>}>
          </Route>
          <Route path='gameshop' element={<GameShopPage/>}>
          </Route>
          <Route path='mygames' element={<MyGamesPage/>}>
          </Route>
          <Route path=":slug" element={<GamePage/>}/>
        </Route>
      </Routes>
  );
  
  
}


export default App;
