import React, { useState, useEffect } from "react";
import { favoriteGameCount } from "../utils/sanity/showServices";
const FavoriteGamesCount = () => {
  const [gameCount, setGameCount] = useState(0);
    useEffect(() => {
    const fetchData = async () => {
      setGameCount(await favoriteGameCount());
    };
    fetchData();
    }, []);
  return (
      <>{gameCount}</>
  );
};
export default FavoriteGamesCount;