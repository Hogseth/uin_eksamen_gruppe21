import "./css/main.css";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./pages/Layout";
import GameShopPage from "./pages/GameShopPage";
import MyGamesPage from "./pages/MyGamesPage";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import GamePage from "./pages/GamePage";

const App = () => {
  

  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='favorites' element={<FavoritesPage/>}/>
          <Route path='gameshop' element={<GameShopPage/>}/>
          <Route path='mygames' element={<MyGamesPage/>}/>
          <Route path='mygames/:slug' element={<GamePage />}/>
          <Route path='favorites/:slug' element={<GamePage/>}/>
        </Route>
      </Routes>
  );
  
  
}


export default App;
