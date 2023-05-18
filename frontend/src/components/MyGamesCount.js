import React, { useState, useEffect } from "react";
import { myGameCount } from "../utils/sanity/showServices";
const MyGamesCount = () => {
  const [gameCount, setGameCount] = useState(0);
    useEffect(() => {
    const fetchData = async () => {
      setGameCount(await myGameCount());
    };
    fetchData();
    }, []);
  return (
      <>{gameCount}</>
  );
};
export default MyGamesCount;